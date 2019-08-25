const gameStart = () => {
        let board =   ['', '', '',
                        '', '', '',
                        '', '', ''];
        let player = 1;
        // 1 = X
        // 2 = O


        const player1 = "1 (X)"; //Player 1 = X
        const player2 = "2 (O)"; //Player 2 = O


        const places = document.querySelectorAll(".main-game__place");
        const playerName = document.getElementById("playerName");

        playerName.style.color = "white";
        playerName.textContent = "Click on the board to start!";

            places.forEach((insert,index) => {
                insert.addEventListener('click',() => {
                    let position = document.getElementById(`${index + 1}`);
                        if(player == 1) {
                            if(board[index] != 'X' && board[index] != 'O' && board[index] != '0') {
                                board[index] = 'X';
                                position.textContent = "X";
                                playerName.textContent = "Now playing: Player " + player2;
                                    gameCheck(player, board, playerName);
                                player = 2;
                            }
                        } else if(player == 2) {
                            if(board[index] != 'X' && board[index] != 'O' && board[index] != '0') {
                                position.textContent = "O";
                                board[index] = 'O';
                                playerName.textContent = "Now playing: Player " + player1;
                                gameCheck(player, board,playerName);
                                player = 1;
                            }
                        }
                });
            });
    };

const gameCheck = (player,board,playerName) => {
    console.table(board);
    // Checking rows
    if(board[0] == board[1] && board[0] == board[2] && board[1] == board[2] && board[0]) {
        if(board[0] != '' && board[1] != '' && board[2] != '') {
            for(let i = 0; i < 3; i++) {
                    let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
            }
            gameEnded(board, playerName, player);
        }
    } else if(board[3] == board[4] && board[3] == board[5] && board[4] == board[5]) {
        if(board[3] != '' && board[4] != '' && board[5] != '') {
            for(let i = 3; i <= 5; i++) {
                let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
            }
            gameEnded(board, playerName, player);
        }
    } else if(board[6] == board[7] && board[6] == board[8] && board[7] == board[8]) {
        if(board[6] != '' && board[7] != '' && board[8] != '') {
            for(let i = 6; i <= 8; i++) {
                let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
            }
            gameEnded(board, playerName, player);
        }
    }
    // Checking columns
    else if(board[0] == board[3] && board[0] == board[6] && board[3] == board[6]) {
        if(board[0] != '' && board[3] != '' && board[6] != '') {
            for(let i = 0; i <= 6; i+=3) {
                let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
            }
            gameEnded(board, playerName, player);
        }
    } else if(board[1] == board[4] && board[1] == board[7] && board[4] == board[7]) {
        if(board[1] != '' && board[4] != '' && board[7] != '') {
            for(let i = 1; i <= 7; i+=3) {
                let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
            }
            gameEnded(board, playerName, player);
        }
    } else if(board[2] == board[5] && board[2] == board[8] && board[5] == board[8]) {
        if(board[2] != '' && board[5] != '' && board[8] != '') {
            for(let i = 2; i <= 8; i+=3) {
                let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
            }
            gameEnded(board, playerName, player);
        }
    }
    //Checking Diagonals
    else if(board[0] == board[4] && board[0] == board[8] && board[4] == board[8]) {
        if(board[0] != '' && board[4] != '' && board[8] != '') {
            for(let i = 0; i <= 8; i+=4) {
                let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
            }
            gameEnded(board, playerName, player);
        }
    }else if(board[2] == board[4] && board[2] == board[6] && board[4] == board[6]) {
        if(board[2] != '' && board[4] != '' && board[6] != '') {
            for(let i = 2; i <= 6; i+=2) {
                let positionStyle = document.getElementById(`${i+1}`).style.color = "red";
            }
            gameEnded(board, playerName, player);
        }
    }
    else {
        let check = 0;
        for(let i = 0; i < 9; i++) {
            if(board[i] == 'X' || board[i] == 'O') {
                check++;
            }
        }
        if(check == 9) {
            player = 0;
            console.log(player);
            console.log(check);
            gameEnded(board, playerName, player);
        }
    }
}

const gameEnded = (board, playerName, player) => {
    if(player == 1) {
        playerName.textContent = `Player ${player} has won! (X)`;
        playerName.style.color = "red";
        for(let i = 0; i < 9; i++) {
            if(board[i] == '') {
                board[i] = '0';
            }
        }
    }
    else if(player == 2) {
        playerName.textContent = `Player ${player} has won! (O)`;
        playerName.style.color = "red";
        for(let i = 0; i < 9; i++) {
            if(board[i] == '') {
                board[i] = '0';
            }
        }
    }
    else if(player == 0){
        playerName.style.color = "red";
        playerName.textContent = "Game has ended as Draw";
    }
    reset(playerName, board, player);
}

const reset = (playerName, board, player) => {
    let button = document.getElementById('resetbtn');

    button.addEventListener('click',()=>{
        for(let i = 0; i < 9; i++) {
            document.getElementById(`${i+1}`).style.color = "white";
            document.getElementById(`${i+1}`).textContent = '';
            board[i] = '';
        }
        playerName.style.color = "white";
        playerName.textContent = "Click on the board to start!";
        player = 1;
    })
}

gameStart();
