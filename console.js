function gameBoard() {
    // Can be local:
    const board = {
        a: [ "", "", ""],
        b: [ "", "", ""],
        c: [ "", "", ""]
    };

    const getBoard = () => board;

    const checkWinner = () => {
        if (board["a"]["0"] === "O" && board["a"]["1"] === "O" && board["a"]["2"] === "O") //A0-A2 Player One Wins
            {
                console.log("Player 1 wins!");
                game.restartGame();
            }
        else if (board["a"]["0"] === "X" && board["a"]["1"] === "X" && board["a"]["2"] === "X") //A0-A2 Player Two Wins
            {
                console.log("Player 2 wins!");
                game.restartGame();
            }
        else if (board["b"]["0"] === "O" && board["b"]["1"] === "O" && board["b"]["2"] === "O") //B0-B2 Player One Wins
            {
                console.log("Player 1 wins!");
                game.restartGame();
            }
        else if (board["b"]["0"] === "X" && board["b"]["1"] === "X" && board["b"]["2"] === "X") //B0-B2 Player Two Wins
            {
                console.log("Player 2 wins!");
                game.restartGame();
            } 
        else if (board["c"]["0"] === "O" && board["c"]["1"] === "O" && board["c"]["2"] === "O") //C0-C2 Player One Wins
            {
                console.log("Player 1 wins!");
                game.restartGame();
            }
        else if (board["c"]["0"] === "X" && board["c"]["1"] === "X" && board["c"]["2"] === "X") //C0-C2 Player Two Wins
            {
                console.log("Player 2 wins!");
                game.restartGame();
            }
        else if (board["a"]["0"] === "O" && board["b"]["0"] === "O" && board["c"]["0"] === "O") { //A0-C0 Player One Wins
            console.log("Player 1 wins!");
            game.restartGame();
        }
        else if (board["a"]["0"] === "X" && board["b"]["0"] === "X" && board["c"]["0"] === "X") { //A0-C0 Player Two Wins
            console.log("Player 2 wins!");
            game.restartGame();
        }
        else if (board["a"]["1"] === "O" && board["b"]["1"] === "O" && board["c"]["1"] === "O") { //A1-C1 Player One Wins
            console.log("Player 1 wins!");
            game.restartGame();
        }
        else if (board["a"]["1"] === "X" && board["b"]["1"] === "X" && board["c"]["1"] === "X") { //A1-C1 Player Two Wins
            console.log("Player 2 wins!");
            game.restartGame();
        }
        else if (board["a"]["2"] === "O" && board["b"]["2"] === "O" && board["c"]["2"] === "O") { //A2-C2 Player One Wins
            console.log("Player 1 wins!");
            game.restartGame();
        }

        else if (board["a"]["2"] === "X" && board["b"]["2"] === "X" && board["c"]["2"] === "X") { //A2-C2 Player Two Wins
            console.log("Player 2 wins!");
            game.restartGame();
        }


        else if (board["a"]["0"] === "O" && board["b"]["1"] === "O" && board["c"]["2"] === "O") { //A0-C2 diagonal Player One Wins
            console.log("Player 1 wins!");
            game.restartGame();
        }

        else if (board["a"]["0"] === "X" && board["b"]["1"] === "X" && board["c"]["2"] === "X") { //A0-C2 diagonal Player Two Wins
            console.log("Player 2 wins!");
            game.restartGame();
        }

        else if (board["a"]["2"] === "O" && board["b"]["1"] === "O" && board["c"]["0"] === "O") { //A2-C0 diagonal Player One Wins
            console.log("Player 1 wins!");
            game.restartGame();
        }

        else if (board["a"]["2"] === "X" && board["b"]["1"] === "X" && board["c"]["0"] === "X") { //A2-C0 diagonal Player Two Wins
            console.log("Player 2 wins!");
            game.restartGame();
        }

    }
    const putToken = (gridItem) => {
        const [row, col] = gridItem; // Take the two characters
        if (board[row][col] === "") { 
            // Mutate the board:
            board[row][col] = game.getActivePlayer().token;
            game.switchPlayerTurn();
            checkWinner();
            
        }
        else {
            console.log("That spot has already been taken. Choose somewhere else");
        }
    };
    const printBoard = () => console.log(board);
    return {
        getBoard, printBoard, putToken
    };
}

function gameController(playerOneName = "Player One", playerTwoName = "Player Two") {
    const board = gameBoard();
    const players = [{
        name: playerOneName,
        token: "O"
    }, {
        name: playerTwoName,
        token: "X"
    }];
    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    };
    const getActivePlayer = () => activePlayer;
    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`)
    };
    
    const playRound = (gridItem) => {
        board.putToken(gridItem);
        
        
        printNewRound();
    };
    
   
  const restartGame = () => {
    board.board = {
        a: [ "", "", ""],
        b: [ "", "", ""],
        c: [ "", "", ""]
    };
    activePlayer = players[0];
    printNewRound();
   }
    printNewRound();

    return {
        playRound, getActivePlayer, switchPlayerTurn, restartGame,
        getBoard: board.getBoard

    };

}

const game = gameController();


