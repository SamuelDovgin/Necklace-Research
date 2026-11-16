(function () {
  "use strict";

  const root = new URL("./", document.currentScript.src);
  const preview = new URL("file-preview.html", root);
  const formats = /\.(xlsx|csv|tsv|pdf|txt|json)$/i;

  function resolve(value, base) {
    if (!value || value.includes("\\")) return null;
    try {
      const url = new URL(value, base);
      if (url.protocol !== root.protocol || url.origin !== root.origin ||
          !url.pathname.startsWith(root.pathname) || url.search ||
          /%(?:2f|5c)/i.test(url.pathname)) return null;
      const path = url.pathname.slice(root.pathname.length);
      const name = decodeURIComponent(path.split("/").at(-1));
      const format = formats.exec(name)?.[1].toLowerCase();
      if (format || name === "SHA256SUMS") return { url, path, name, format: format || "txt" };
    } catch {
      return null;
    }
    return null;
  }

  window.ResearchFilePreview = { root, resolve };
  if (location.pathname === preview.pathname) return;

  function route(link) {
    if (link.hasAttribute("download") || link.hasAttribute("data-raw-download")) return;
    const file = resolve(link.getAttribute("href"), document.baseURI);
    if (!file) return;
    const url = new URL(preview);
    url.searchParams.set("file", file.path);
    const label = link.dataset.previewTitle || (link.closest(".markdown-body") && link.textContent.trim());
    if (label) url.searchParams.set("title", label);
    url.hash = file.url.hash;
    link.href = url.href;
  }

  function scan(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches("a[href]")) route(node);
    node.querySelectorAll("a[href]").forEach(route);
  }

  scan(document.body);
  new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(scan)))
    .observe(document.body, { childList: true, subtree: true });
})();
