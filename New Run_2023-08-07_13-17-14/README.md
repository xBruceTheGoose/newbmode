# Game of Life

This is a simple implementation of Conlan's Game of Life. The game is played on a 128x128 grid, and users can click to activate up to 36 cells and start any time after activating at least 12.

## Rules of the Game

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Setup

To setup the game, simply open `index.html` in your browser.