function updateScore() {
    let teamAScore = document.getElementById("teamA-1");
    let teamBScore = document.getElementById("teamB-1");

    teamAScore.innerText = parseInt(teamAScore.innerText) + 1;  // Increase Team A's score
    teamBScore.innerText = parseInt(teamBScore.innerText) + 1;  // Increase Team B's score
}
