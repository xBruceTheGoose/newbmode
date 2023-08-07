let gameGrid = new GameGrid(128);
let leaderboard = new Leaderboard();
let score = 0;
let gameRunning = false;

function startGame() {
    if (gameGrid.getActiveCells() >= 12) {
        gameRunning = true;
        gameLoop();
    }
}

function stopGame() {
    gameRunning = false;
}

function updateScore() {
    if (gameRunning) {
        score += gameGrid.getActiveCells();
    }
}

function gameLoop() {
    if (gameRunning) {
        gameGrid.updateGrid();
        updateScore();
        setTimeout(gameLoop, 1000);
    } else {
        leaderboard.addScore(score);
    }
}
