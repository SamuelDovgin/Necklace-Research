"use strict";

const viewSelect = document.querySelector("#register-view");
const searchInput = document.querySelector("#register-search");
const table = document.querySelector("#register-table");
const help = document.querySelector("#register-help");
const status = document.querySelector("#register-status");
let registers;

function cellText(value) {
  return typeof value === "string" ? value : value.text;
}

function fillCell(cell, value) {
  if (typeof value !== "string") {
    const anchor = document.createElement("a");
    anchor.textContent = value.text;
    anchor.href = value.href;
    cell.append(anchor);
    return;
  }
  if (value.length <= 260) {
    cell.textContent = value || "—";
    return;
  }
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const cut = value.lastIndexOf(" ", 160);
  summary.textContent = `${value.slice(0, cut > 0 ? cut : 160)}…`;
  const note = document.createElement("p");
  note.textContent = value;
  details.append(summary, note);
  cell.append(details);
}

function renderRegister() {
  const register = registers[viewSelect.value];
  const query = searchInput.value.trim();
  const terms = query.toLowerCase().match(/\S+/g) || [];
  const rows = register.rows.filter(row => {
    const searchable = row.map(cellText).join(" ").toLowerCase();
    return terms.every(term => searchable.includes(term));
  });

  const heading = document.createElement("tr");
  for (const column of register.columns) {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = column;
    heading.append(cell);
  }
  const body = document.createDocumentFragment();
  for (const row of rows) {
    const line = document.createElement("tr");
    for (const value of row) {
      const cell = document.createElement("td");
      fillCell(cell, value);
      line.append(cell);
    }
    body.append(line);
  }

  help.textContent = register.note;
  table.querySelector("thead").replaceChildren(heading);
  table.querySelector("tbody").replaceChildren(body);
  table.hidden = !rows.length;
  status.textContent = rows.length ? `${rows.length} of ${register.rows.length} records` : "No matches. Try a broader search.";
}

function syncURL() {
  const url = new URL(window.location.href);
  url.searchParams.set("view", viewSelect.value);
  const query = searchInput.value.trim();
  if (query) url.searchParams.set("q", query);
  else url.searchParams.delete("q");
  history.replaceState(null, "", url);
}

async function loadRegisters() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("view");
  const sources = [
    ["data/sourcing-registers.json", "Jewelry sourcing archive"],
    ["data/district-registers.json", "China district research"],
  ];
  const results = await Promise.allSettled(sources.map(async ([path]) => {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Register data unavailable");
    return response.json();
  }));
  registers = {};
  results.forEach((result, index) => {
    if (result.status !== "fulfilled") return;
    const group = document.createElement("optgroup");
    group.label = sources[index][1];
    for (const [key, register] of Object.entries(result.value)) {
      registers[key] = register;
      const option = document.createElement("option");
      option.value = key;
      option.textContent = `${register.label} (${register.rows.length})`;
      group.append(option);
    }
    viewSelect.append(group);
  });
  if (requested && !Object.hasOwn(registers, requested) && results.some(result => result.status === "rejected")) {
    throw new Error("Requested register unavailable");
  }
  if (!viewSelect.options.length) throw new Error("Registers unavailable");
  viewSelect.value = Object.hasOwn(registers, requested) ? requested : "suppliers";
  if (!viewSelect.value) viewSelect.selectedIndex = 0;
  searchInput.value = params.get("q") || "";
  document.querySelector("#register-controls").hidden = false;
  renderRegister();

  for (const control of [viewSelect, searchInput]) {
    control.addEventListener(control === viewSelect ? "change" : "input", () => {
      renderRegister();
      syncURL();
    });
  }
  document.querySelector("#clear-search").addEventListener("click", () => {
    searchInput.value = "";
    renderRegister();
    syncURL();
    searchInput.focus();
  });
}

loadRegisters().catch(() => {
  help.firstChild.textContent = "The searchable registers could not load. Browse the ";
});
