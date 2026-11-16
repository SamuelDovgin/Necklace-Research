(function () {
  "use strict";

  const documentRoot = document.getElementById("document");
  const rawLink = document.getElementById("rawLink");
  const fileLabel = document.getElementById("fileLabel");
  let sourceDirectory = "";

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
  }

  function safeHref(value) {
    const entities = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'" };
    const href = value.replace(/&(?:amp|lt|gt|quot|#039);/g, entity => entities[entity]).trim().replace(/^<|>$/g, "");
    if (/^(?:javascript|data|vbscript):/i.test(href)) return "#";
    if (/^(?:https?:)?\/\//i.test(href) || href.startsWith("/") || href.startsWith("#")) return href;
    return `${sourceDirectory}${href}`;
  }

  function inline(text) {
    let output = escapeHtml(text);
    output = output.replace(/!\[([^\]]*)\]\(([^\s)]+)\)/g, (_match, alt, src) => `<img src="${escapeHtml(safeHref(src))}" alt="${alt}" loading="lazy">`);
    output = output.replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (_match, label, href) => {
      const safe = safeHref(href);
      const external = /^https?:\/\//i.test(safe);
      return `<a href="${escapeHtml(safe)}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${label}</a>`;
    });
    output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return output;
  }

  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function parseTable(lines, start) {
    const rows = [];
    let index = start;
    while (index < lines.length && /^\|.*\|\s*$/.test(lines[index])) {
      rows.push(lines[index].trim().slice(1, -1).split("|").map(cell => cell.trim()));
      index += 1;
    }
    if (rows.length < 2 || !rows[1].every(cell => /^:?-{3,}:?$/.test(cell))) return null;
    const header = `<thead><tr>${rows[0].map(cell => `<th>${inline(cell)}</th>`).join("")}</tr></thead>`;
    const body = `<tbody>${rows.slice(2).map(row => `<tr>${row.map(cell => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("")}</tbody>`;
    return { html: `<div class="table-scroll" role="region" aria-label="Scrollable research table" tabindex="0"><table>${header}${body}</table></div>`, next: index };
  }

  function renderMarkdown(source) {
    const lines = source.split("\n");
    const html = [];
    let index = 0;
    while (index < lines.length) {
      const line = lines[index];
      if (!line.trim()) { index += 1; continue; }
      if (/^```/.test(line)) {
        const code = [];
        index += 1;
        while (index < lines.length && !/^```/.test(lines[index])) code.push(lines[index++]);
        html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        index += 1;
        continue;
      }
      if (/^\|.*\|\s*$/.test(line)) {
        const table = parseTable(lines, index);
        if (table) { html.push(table.html); index = table.next; continue; }
      }
      const heading = line.match(/^(#{1,3})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        html.push(`<h${level} id="${slugify(heading[2])}">${inline(heading[2])}</h${level}>`);
        index += 1;
        continue;
      }
      if (/^---+$/.test(line.trim())) { html.push("<hr>"); index += 1; continue; }
      if (/^>\s?/.test(line)) {
        const quoted = [];
        while (index < lines.length && /^>/.test(lines[index])) quoted.push(lines[index++].replace(/^>\s?/, ""));
        html.push(`<blockquote>${quoted.map(value => value ? `<p>${inline(value)}</p>` : "").join("")}</blockquote>`);
        continue;
      }
      if (/^\s*[-*]\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
          const value = lines[index++].replace(/^\s*[-*]\s+/, "");
          const task = value.match(/^\[([ xX])\]\s+(.*)/);
          items.push(task ? `<li class="task"><input type="checkbox" ${task[1].toLowerCase() === "x" ? "checked" : ""}>${inline(task[2])}</li>` : `<li>${inline(value)}</li>`);
        }
        html.push(`<ul>${items.join("")}</ul>`);
        continue;
      }
      if (/^\s*\d+\.\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) items.push(`<li>${inline(lines[index++].replace(/^\s*\d+\.\s+/, ""))}</li>`);
        html.push(`<ol>${items.join("")}</ol>`);
        continue;
      }
      const paragraph = [line.trim()];
      index += 1;
      while (index < lines.length && lines[index].trim() && !/^(#{1,3})\s|^>|^```|^---+$|^\||^\s*[-*]\s+|^\s*\d+\.\s+/.test(lines[index])) paragraph.push(lines[index++].trim());
      html.push(`<p>${inline(paragraph.join(" "))}</p>`);
    }
    return html.join("\n");
  }

  async function loadDocument() {
    const file = new URLSearchParams(window.location.search).get("file") || "";
    const segments = file.split("/");
    const valid = file.toLowerCase().endsWith(".md") && !file.startsWith("/") && segments.every(segment => segment && segment !== "." && segment !== "..");
    if (!valid) throw new Error("Choose a valid Markdown document from the research archive.");
    rawLink.href = file;
    rawLink.hidden = false;
    fileLabel.textContent = file;
    sourceDirectory = file.slice(0, file.lastIndexOf("/") + 1);
    const response = await fetch(file, { cache: "no-store" });
    if (!response.ok) throw new Error(`The document could not be loaded (${response.status}).`);
    const source = await response.text();
    documentRoot.innerHTML = renderMarkdown(source);
    const title = documentRoot.querySelector("h1")?.textContent;
    if (title) document.title = `${title} — Jewelry Research Hub`;
    const anchor = new URL(window.location.href).hash.slice(1);
    if (anchor) document.getElementById(anchor)?.scrollIntoView();
  }

  loadDocument().catch(error => {
    documentRoot.innerHTML = `<h1>Document unavailable</h1><p class="error">${escapeHtml(error.message)}</p>`;
    fileLabel.textContent = "Unable to load document";
    rawLink.hidden = true;
  });
})();
