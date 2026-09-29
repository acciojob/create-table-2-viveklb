function createTable() {
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    // Check cancelled or non-numeric input
    if (
        rn === null ||
        cn === null ||
        rn.trim() === "" ||
        cn.trim() === "" ||
        isNaN(rn) ||
        isNaN(cn)
    ) {
        return;
    }

    const rows = Number(rn);
    const columns = Number(cn);

    // Check zero or negative values
    if (rows <= 0 || columns <= 0) {
        alert("Rows and columns must be greater than 0");
        return;
    }

    const table = document.getElementById("myTable");

    // Clear old table if button is clicked again
    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();

        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}