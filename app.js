const gameStart = () => {

    const board =   ['', '', '',
                     '', '', '',
                     '', '', ''];
    let player = 1;
    // 1 = X
    // 2 = O

    let boardLength = 0;

    const player1 = "1 (X)"; //Player 1 = X
    const player2 = "2 (O)"; //Player 2 = O


    const places = document.querySelectorAll(".main-game__place");
    const playerName = document.getElementById("playerName");

    playerName.textContent = "Click on the board to start!";

        places.forEach((insert,index) => {
            insert.addEventListener('click',() => {
                let position = document.getElementById(`${index + 1}`);
                console.log(position);
                    if(player == 1) {
                        if(board[index] != 'X' && board[index] != 'O') {
                            board[index] = 'X';
                            position.textContent = "X";
                            console.log(board[index]);
                            boardLength++;
                            playerName.textContent = "Now playing: Player " + player2;
                            if(boardLength >= 3) {
                                gameCheck(player, board, playerName, boardLength);
                            }
                            player = 2;
                        }
                    } else if(player == 2) {
                        if(board[index] != 'X' && board[index] != 'O') {
                            position.textContent = "O";
                            board[index] = 'O';
                            console.log(board[index]);
                            boardLength ++;
                            playerName.textContent = "Now playing: Player " + player1;
                            if(boardLength >= 3) {
                                gameCheck(player, board, playerName, boardLength);
                            }
                            player = 1;
                        }
                    }
            });
        });
    };

const gameCheck = (player,board,playerName, boardLength) => {
    // Checking rows
    if(board[0] == board[1] && board[0] == board[2] && board[1] == board[2]) {
        gameEnded(board, playerName, player);
    } if(board[3] == board[4] && board[3] == board[5] && board[4] == board[5]) {
        gameEnded(board, playerName, player);
    } if(board[6] == board[7] && board[6] == board[8] && board[7] == board[8]) {
        gameEnded(board, playerName, player);
    }
    // Checking columns
    if(board[0] == board[3] && board[0] == board[6] && board[3] == board[6]) {
        gameEnded(board, playerName, player);
    } if(board[1] == board[4] && board[1] == board[7] && board[4] == board[7]) {
        gameEnded(board, playerName, player);
    } if(board[2] == board[5] && board[2] == board[8] && board[5] == board[8]) {
        gameEnded(board, playerName, player);
    }
    //Checking Diagonals
    if(board[0] == board[4] && board[0] == board[8] && board[4] == board[8]) {
        gameEnded(board, playerName, player);
    } if(board[2] == board[4] && board[2] == board[6] && board[4] == board[6]) {
        gameEnded(board, playerName, player);
    }
    if(board.length == boardLength) {
        player = 0;
        gameEnded(board, playerName, player);
    }
}

const gameEnded = (board, playerName, player) => {
    if(player == 1) {
        playerName.textContent = `Player ${player} has won! (X)`;
    }
    else if(player == 2) {
        playerName.textContent = `Player ${player} has won! (O)`;
    }
    else if(player == 0){
        playerName.textContent = "Game has ended as Draw";
    }
}

gameStart();