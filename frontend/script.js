document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.querySelector("#current-player");
    const resetButton = document.querySelector("#reset");
    const modeSelect = document.querySelector("#mode");
    let currentPlayer = "A";
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;
    let gameMode = modeSelect.value;
    let computerPlaying = false;
  
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    function handleCellClick(event) {
      if (computerPlaying || !gameActive) {
        return;
      }
  
      const clickedCell = event.target;
      const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));
  
      if (board[clickedCellIndex] !== "") {
        return;
      }
  
      updateCell(clickedCell, clickedCellIndex);
      checkResult();
  
      if (gameMode === "computer" && currentPlayer === "B" && gameActive) {
        computerPlaying = true;
        setTimeout(() => {
          computerMove();
          checkResult(); // Check the result after the computer moves
          if (gameActive) {
            changePlayer(); // Switch to player A if the game is still active
          }
          computerPlaying = false; // Allow player to play after computer move
        }, 500); // Add a small delay to simulate thinking time
      }
    }
  
    function updateCell(cell, index) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer === "A" ? "X" : "O";
    }
  
    function changePlayer() {
      currentPlayer = currentPlayer === "A" ? "B" : "A";
      statusText.textContent = `Player ${currentPlayer}`;
    }
  
    function checkResult() {
      let roundWon = false;
  
      for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
  
        if (a === "" || b === "" || c === "") {
          continue;
        }
  
        if (a === b && b === c) {
          roundWon = true;
          highlightWinningCells(winCondition);
          break;
        }
      }
  
      if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
      }
  
      if (!board.includes("")) {
        statusText.textContent = `Game Ended in a Draw!`;
        gameActive = false;
        return;
      }
  
      changePlayer();
    }
  
    function highlightWinningCells(winCondition) {
      winCondition.forEach((index) => {
        cells[index].classList.add("win");
      });
    }
  
    function resetGame() {
      currentPlayer = "A";
      board = ["", "", "", "", "", "", "", "", ""];
      gameActive = true;
      statusText.textContent = "Player A";
      cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("win");
      });
      computerPlaying = false;
    }
  
    function computerMove() {
      let availableCells = board
        .map((val, index) => (val === "" ? index : null))
        .filter((val) => val !== null);
      let randomIndex =
        availableCells[Math.floor(Math.random() * availableCells.length)];
  
      board[randomIndex] = "B";
      cells[randomIndex].textContent = "O";
      // Check if the game has ended after the computer's move
      checkResult();
    }
  
    modeSelect.addEventListener("change", () => {
      gameMode = modeSelect.value;
      resetGame();
    });
  
    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
  });
  