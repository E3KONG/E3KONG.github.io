document.getElementById('csvFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            generateTable(text);
        };
        reader.readAsText(file);
    }
});

function generateTable(csv) {
    const rows = csv.split('\n'); // Split CSV into rows
    const table = document.getElementById('csvTable');
    table.innerHTML = ''; // Clear existing table content

    rows.forEach((row, index) => {
        const tr = document.createElement('tr');
        const cells = row.split(','); // Split each row into cells

        cells.forEach(cell => {
            const cellElement = document.createElement(index === 0 ? 'th' : 'td');
            cellElement.textContent = cell.trim();
            tr.appendChild(cellElement);
        });

        table.appendChild(tr);
    });
}