"use strict";

async function showRecentEntries() {
  const response = await fetch("research/journal.md", { cache: "no-cache" });
  if (!response.ok) return;

  const journal = await response.text();
  const entries = [...journal.matchAll(/^## (\d{4}-\d{2}-\d{2}) — (.+)\r?\n\r?\n([^\r\n]+)/gm)];
  if (!entries.length) return;

  const list = document.querySelector("#recent-entries");
  for (const [, date, title, summary] of entries.slice(0, 3)) {
    const anchor = `${date}-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
    const item = document.createElement("li");
    const time = document.createElement("time");
    const link = document.createElement("a");
    const description = document.createElement("p");

    time.dateTime = date;
    time.textContent = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeZone: "UTC",
    }).format(new Date(date));
    link.href = `markdown-viewer.html?file=research/journal.md#${anchor}`;
    link.textContent = title;
    description.textContent = summary;
    item.append(time, link, description);
    list.append(item);
  }
  list.hidden = false;
  document.querySelector("#journal-fallback").hidden = true;
}

showRecentEntries().catch(() => {
  // The journal link remains available if the preview cannot be loaded.
});
