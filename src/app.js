import data from "./data";

const root = document.getElementById("root");

function renderRow(parent, keys, map) {
  const tr = document.createElement("tr");
  for (let key of keys) {
    const td = document.createElement("td");
    td.textContent = map[key] || "no-data";
    tr.appendChild(td);
  }
  parent.appendChild(tr);
}

function renderTable(parent, data) {
  const keys = Object.keys(data[0]);
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  for (let datum of data) {
    renderRow(tbody, keys, datum);
  }
  table.appendChild(tbody);
  parent.appendChild(table);
}

renderTable(root, data);
