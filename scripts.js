function addPlayer() {
    let tableBody = document.getElementById("scorecard-body");
    let newRow = document.createElement("tr");

    let playerCell = document.createElement("td");
    playerCell.innerText = "Player " + (tableBody.children.length + 1);
    newRow.appendChild(playerCell);

    let positionCell = document.createElement("td");
    positionCell.innerText = "Position";
    newRow.appendChild(positionCell);

    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("td");
        cell.innerHTML = `<div class="diamond" onclick="editDiamond(this)">⚾</div>`;
        newRow.appendChild(cell);
    }

    let stats = ["AB", "R", "H", "RBI", "SO", "BB"];
    stats.forEach(stat => {
        let statCell = document.createElement("td");
        statCell.innerText = "0";
        statCell.onclick = function() {
            let value = prompt(`Enter ${stat} value:`);
            if (value) {
                statCell.innerText = value;
            }
        };
        newRow.appendChild(statCell);
    });

    tableBody.appendChild(newRow);
}

function editDiamond(element) {
    let action = prompt("Enter action: (K = Strikeout, HR = Home Run, 1B = Single, etc.)");
    if (action) {
        element.innerText = action;
    }
}

function resetScorecard() {
    let cells = document.querySelectorAll("#scorecard-body td, .diamond");
    cells.forEach(cell => cell.innerText = "");
}
