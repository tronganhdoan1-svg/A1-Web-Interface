console.log("Hello, World!");
const siteVisitors = [
    { month: "May 2026", visitors: 13915 },
    { month: "June 2026", visitors: 11302 },
    { month: "July 2026", visitors: 15760 },
    { month: "August 2026", visitors: 17044 },
    { month: "September 2026", visitors: 18629 },
    { month: "October 2026", visitors: 19310 }
    ];

function buildVisitorTable() {
const container = document.querySelector("#visitor-table");
if (!container) return; // only the homepage has it

const table = document.createElement("table");

siteVisitors.forEach(({ month, visitors }) => {
    const row = document.createElement("tr");
    const col1 = document.createElement("td");
    col1.textContent = `${month}`;
    row.appendChild(col1);
    const col2 = document.createElement("td");
    col2.textContent = `${visitors}`;
    row.appendChild(col2);
    table.appendChild(row);
});

container.appendChild(table);
}

buildVisitorTable();
