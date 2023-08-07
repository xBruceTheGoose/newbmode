# Specification for the Browser-Based Game of Life

## Overview
The program is a browser-based implementation of Conlan's Game of Life. The game will be played on a 128x128 cell grid. Users can activate up to 36 cells and start the game anytime after activating at least 12 cells. The game will include a scoring system and a leaderboard.

## Core Features
1. **Game Grid:** A 128x128 grid where the game is played. The grid cells can be activated or deactivated by the user.
2. **Cell Activation:** Users can click to activate up to 36 cells. The game can be started any time after at least 12 cells have been activated.
3. **Game Start/Stop:** The game can be started or stopped by the user.
4. **Scoring System:** The game will keep track of the user's score and update it as the game progresses.
5. **Leaderboard:** The game will maintain a leaderboard, showing the top scores from all users.

## Core Classes, Functions, and Methods
1. **GameGrid Class:** Represents the game grid. It should have methods to create the grid, activate/deactivate cells, and update the grid state.
2. **startGame Function:** Starts the game. It should only be callable when at least 12 cells have been activated.
3. **stopGame Function:** Stops the game.
4. **updateScore Function:** Updates the user's score.
5. **Leaderboard Class:** Represents the leaderboard. It should have methods to add a score, remove a score, and retrieve the top scores.

## Non-Standard Dependencies
1. **jQuery:** A fast, small, and feature-rich JavaScript library. It will be used to handle HTML document traversal and manipulation, event handling, and animation.
2. **Bootstrap:** A popular HTML, CSS, and JS framework for developing responsive, mobile-first projects. It will be used to style the game grid, buttons, score display, and leaderboard.

## Detailed Specification
1. **Game Grid:** The game grid will be a 128x128 cell grid displayed on the browser. Each cell can be in one of two states: active or inactive. The cells will be represented as HTML div elements and styled using CSS. The GameGrid class will have methods to handle cell activation/deactivation and grid state updates.
2. **Cell Activation:** Users can click on a cell to activate it. A maximum of 36 cells can be activated. The game can be started any time after at least 12 cells have been activated. The GameGrid class will have a method to handle cell clicks and update the cell's state.
3. **Game Start/Stop:** A 'Start Game' button will be provided. When clicked, the startGame function will be called to start the game. The game can be stopped at any time by clicking a 'Stop Game' button, which will call the stopGame function.
4. **Scoring System:** The user's score will be calculated based on the number of active cells and the duration of the game. The score will be updated every second using the updateScore function.
5. **Leaderboard:** The leaderboard will display the top scores from all users. The Leaderboard class will have methods to add a score, remove a score, and retrieve the top scores. The leaderboard will be updated every time a game ends.

## GitHub Repository
The code files will be uploaded on the provided GitHub Repository. The README.MD file will be updated with the project details, instructions on how to play the game, and information about the scoring system and leaderboard.