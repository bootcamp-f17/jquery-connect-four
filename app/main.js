// alert("loading JS...");

// Global variables

// 1: initial state (menu unlocked, board locked)
// 2: taking turns (menu locked, board unlocked)
// 3: done, waiting for restart (menu and board locked)
var state = 0; 

var currentPlayer;

var board; // some representation of what the board looks like

function startGame(p1, p2) {
  // Accept 2 objects for the players
  // Start the game

  // Do some stuff....

  initializeData();
  drawMenu();
  drawBoard();

}

function initializeData() {

  //

}

function drawMenu() {

  //

}

function drawBoard() {

  //

}

function checkForWin() {

  var gameWasWon = false;

  // Check for win criteria...

  if (gameWasWon) {

    updateMessage();
    saveResults();
    promptForNewGame();

  }
  else {

    // Game not won
    // Play continues

  }


}

function checkForDraw() {

  var gameWasDrawn = false;

  // Check for full board

  if (gameWasDrawn) {

    updateMessage();
    saveResults();
    promptForNewGame();

  }

}

function updateMessage() {

  //

}

function saveResults() {

  //

}

function promptForNewGame() {

  //

}

function quit() {

  //

  updateMessage();
  promptForNewGame();

}