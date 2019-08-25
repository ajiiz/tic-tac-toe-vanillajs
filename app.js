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
        for(let i = 0; i < 3; i++) {
            let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
        }
        gameEnded(board, playerName, player);
    } if(board[3] == board[4] && board[3] == board[5] && board[4] == board[5]) {
        for(let i = 3; i <= 5; i++) {
            let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
        }
        gameEnded(board, playerName, player);
    } if(board[6] == board[7] && board[6] == board[8] && board[7] == board[8]) {
        for(let i = 6; i <= 8; i++) {
            let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
        }
        gameEnded(board, playerName, player);
    }
    // Checking columns
    if(board[0] == board[3] && board[0] == board[6] && board[3] == board[6]) {
        for(let i = 0; i <= 6; i+=3) {
            let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
        }
        gameEnded(board, playerName, player);
    } if(board[1] == board[4] && board[1] == board[7] && board[4] == board[7]) {
        for(let i = 1; i < 7; i+=3) {
            let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
        }
        gameEnded(board, playerName, player);
    } if(board[2] == board[5] && board[2] == board[8] && board[5] == board[8]) {
        for(let i = 2; i <= 8; i+=3) {
            let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
        }
        gameEnded(board, playerName, player);
    }
    //Checking Diagonals
    if(board[0] == board[4] && board[0] == board[8] && board[4] == board[8]) {
        for(let i = 0; i <= 8; i+=4) {
            let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
        }
        gameEnded(board, playerName, player);
    } if(board[2] == board[4] && board[2] == board[6] && board[4] == board[6]) {
        for(let i = 2; i <= 6; i+=2) {
            let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
        }
        gameEnded(board, playerName, player);
    }
    else if(board.length == boardLength) {
        player = 0;
        gameEnded(board, playerName, player);
    }
}

const gameEnded = (board, playerName, player) => {
    if(player == 1) {
        playerName.textContent = `Player ${player} has won! (X)`;
        console.log(board);
    }
    else if(player == 2) {
        playerName.textContent = `Player ${player} has won! (O)`;
        console.log(board);
    }
    else if(player == 0){
        playerName.textContent = "Game has ended as Draw";
        console.log(board);
    }
}

gameStart();
