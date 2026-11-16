"use strict";

const copyStatus = document.querySelector("#copy-status");
for (const button of document.querySelectorAll("[data-copy]")) {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const template = document.getElementById(button.dataset.copy);
    const message = template.textContent.trim();
    try {
      await navigator.clipboard.writeText(message);
      copyStatus.textContent = `${button.textContent.replace("Copy ", "")} copied.`;
    } catch {
      const range = document.createRange();
      range.selectNodeContents(template);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = "The message is selected. Use your keyboard or browser menu to copy it.";
    }
  });
}

const budget = document.querySelector("#setting-budget");
const target = document.querySelector("#budget-target");
const stone = document.querySelector("#budget-stone");
const extras = document.querySelector("#budget-extras");
const result = document.querySelector("#budget-result");
const dollars = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function cents(input) {
  return Math.round(input.valueAsNumber * 100);
}

function updateBudget() {
  if (!budget.checkValidity()) {
    result.textContent = "Enter all three amounts to see the setting budget.";
    return;
  }
  const remaining = cents(target) - cents(stone) - cents(extras);
  if (remaining < 0) {
    result.textContent = `The stone and other costs already exceed the comparison by ${dollars.format(-remaining / 100)}.`;
    return;
  }
  result.textContent = `Maximum for mounting, CAD, setting and finishing to match the comparison: ${dollars.format(remaining / 100)}.`;
}

budget.hidden = false;
budget.addEventListener("input", updateBudget);
budget.addEventListener("submit", event => event.preventDefault());
updateBudget();
