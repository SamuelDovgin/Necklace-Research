(function () {
  "use strict";

  const { root, resolve } = window.ResearchFilePreview;
  const title = document.getElementById("previewTitle");
  const status = document.getElementById("previewStatus");
  const content = document.getElementById("fileContent");
  const download = document.getElementById("downloadFile");
  const openPdf = document.getElementById("openPdf");
  const sheetPreview = document.getElementById("sheetPreview");
  const sheetPicker = document.getElementById("sheetPicker");
  const sheetSelect = document.getElementById("sheetSelect");
  const rowSearch = document.getElementById("rowSearch");
  const table = document.getElementById("sheetTable");
  const scroll = table.parentElement;
  const rowCount = document.getElementById("rowCount");
  const previous = document.getElementById("previousPage");
  const next = document.getElementById("nextPage");
  const rowsPerPage = 50;
  const count = new Intl.NumberFormat();

  function displayCell(cell) {
    if (cell?.w !== undefined) return cell.w;
    if (cell?.v !== undefined) return String(cell.v);
    return cell?.f ? `=${cell.f}` : "";
  }

  function appendCellValue(element, value, target) {
    const href = target || value;
    if (/^https?:\/\/[^\s]+$/i.test(href)) {
      const link = document.createElement("a");
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = value || href;
      element.append(link);
    } else {
      element.textContent = value;
    }
  }

  function showWorkbook(workbook) {
    const { SheetNames, Sheets } = workbook;
    if (!SheetNames.length) throw new Error("This workbook has no worksheets.");
    sheetSelect.replaceChildren(...SheetNames.map(name => new Option(name, name)));
    sheetPicker.hidden = SheetNames.length < 2;
    sheetPreview.hidden = false;
    status.hidden = true;
    let columns, headings, rows, matches, horizontalMerges;
    let page = 0;

    function renderPage() {
      const start = page * rowsPerPage;
      const end = Math.min(start + rowsPerPage, matches.length);
      const header = document.createElement("thead");
      const headingRow = header.insertRow();
      const indexHeading = document.createElement("th");
      indexHeading.scope = "col";
      indexHeading.textContent = "Row";
      headingRow.append(indexHeading);
      for (const column of columns) {
        const heading = document.createElement("th");
        heading.scope = "col";
        heading.textContent = displayCell(headings?.[column]) || XLSX.utils.encode_col(column);
        headingRow.append(heading);
      }
      const body = document.createElement("tbody");
      for (const { number, cells } of matches.slice(start, end)) {
        const row = body.insertRow();
        const index = document.createElement("th");
        index.scope = "row";
        index.textContent = number;
        row.append(index);
        const merges = horizontalMerges.get(number);
        let mergedThrough = -1;
        for (const column of columns) {
          if (column <= mergedThrough) continue;
          const cell = cells[column];
          const entry = row.insertCell();
          if (merges?.has(column)) {
            mergedThrough = merges.get(column);
            entry.colSpan = columns.filter(value => value >= column && value <= mergedThrough).length;
          }
          appendCellValue(entry, displayCell(cell), cell?.l?.Target);
        }
      }
      table.replaceChildren(header, body);
      rowCount.textContent = matches.length
        ? `${count.format(start + 1)}–${count.format(end)} of ${count.format(matches.length)} rows`
        : rows.length ? "No matching rows" : "No data rows";
      previous.disabled = page === 0;
      next.disabled = end >= matches.length;
      scroll.scrollTop = 0;
    }

    function filterRows() {
      const words = rowSearch.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      matches = words.length ? rows.filter(({ cells }) => {
        const text = cells.map(displayCell).join(" ").toLowerCase();
        return words.every(word => text.includes(word));
      }) : rows;
      page = 0;
      renderPage();
    }

    function selectSheet() {
      const sheet = Sheets[sheetSelect.value];
      const data = sheet["!data"] || [];
      horizontalMerges = new Map();
      for (const { s: start, e: end } of sheet["!merges"] || []) {
        if (start.r !== end.r) continue;
        const number = start.r + 1;
        if (!horizontalMerges.has(number)) horizontalMerges.set(number, new Map());
        horizontalMerges.get(number).set(start.c, end.c);
      }
      // Use populated cells so whole-row formatting does not create empty records.
      const populated = new Set();
      rows = [];
      data.forEach((cells, index) => {
        let hasData = false;
        cells?.forEach((cell, column) => {
          if (!displayCell(cell)) return;
          hasData = true;
          populated.add(column);
        });
        if (hasData) rows.push({ number: index + 1, cells });
      });
      columns = Array.from(populated).sort((a, b) => a - b);
      const first = rows[0];
      const hasHeadings = rows.length > 1 && !horizontalMerges.has(first.number) &&
        first.cells.filter(displayCell).length > 1;
      headings = hasHeadings ? rows.shift().cells : null;
      rowSearch.value = "";
      scroll.scrollLeft = 0;
      filterRows();
    }

    rowSearch.addEventListener("input", filterRows);
    sheetSelect.addEventListener("change", selectSheet);
    previous.addEventListener("click", () => { page -= 1; renderPage(); });
    next.addEventListener("click", () => { page += 1; renderPage(); });
    selectSheet();
  }

  function loadSheetParser() {
    return new Promise((ready, fail) => {
      const script = document.createElement("script");
      script.src = new URL("vendor/sheetjs/xlsx.mini.min.js", root);
      script.onload = ready;
      script.onerror = () => fail(new Error("The table viewer could not load."));
      document.head.append(script);
    });
  }

  function showPDF(file) {
    const frame = document.createElement("object");
    frame.className = "pdf-preview";
    frame.type = "application/pdf";
    frame.data = file.url.href;
    frame.setAttribute("aria-label", title.textContent);
    frame.textContent = "Use Open PDF in a new tab or Download original if the embedded reader is unavailable.";
    content.append(frame);
    openPdf.href = file.url.href;
    openPdf.hidden = false;
    status.hidden = true;
  }

  async function loadFile() {
    const params = new URLSearchParams(location.search);
    const file = resolve(params.get("file"), root);
    if (!file) throw new Error("Choose a file from the research hub to preview.");

    const referrer = document.referrer;
    if (referrer && referrer.startsWith(root.href) && new URL(referrer).pathname !== location.pathname) {
      const back = document.getElementById("backLink");
      back.href = referrer;
      back.textContent = "← Back to research";
    }
    title.textContent = params.get("title")?.trim() || file.name;
    document.title = `${title.textContent} · File preview`;
    file.url.hash = location.hash;
    download.href = file.url.href;
    download.download = file.name;
    download.hidden = false;

    if (file.format === "pdf") {
      showPDF(file);
      return;
    }

    const isTable = ["xlsx", "csv", "tsv"].includes(file.format);
    const [response] = await Promise.all([
      fetch(file.url),
      isTable ? loadSheetParser() : Promise.resolve(),
    ]);
    if (!response.ok) throw new Error(`The original could not be loaded (${response.status}).`);

    if (isTable) {
      const isWorkbook = file.format === "xlsx";
      const data = isWorkbook ? await response.arrayBuffer() : await response.text();
      const options = { dense: true };
      if (!isWorkbook) Object.assign(options, { type: "string", raw: true, FS: file.format === "tsv" ? "\t" : "," });
      showWorkbook(XLSX.read(data, options));
    } else {
      const pre = document.createElement("pre");
      pre.className = "text-preview";
      pre.textContent = await response.text();
      content.append(pre);
      status.hidden = true;
    }
  }

  loadFile().catch(error => {
    status.textContent = error.message;
    status.classList.add("error");
    status.hidden = false;
    sheetPreview.hidden = true;
  });
})();
