const game = () => {

    const board =   ['', '', '',
                     '', '', '',
                     '', '', ''];
    let player = 1;
    // 1 = X
    // 0 = O

    const maxValue = 9;
    let boardLength = 0;
    const player0 = "0[O]";
    const player1 = "1[X]";

    const places = document.querySelectorAll(".main-game__place");
    const playerName = document.getElementById("playerName");

        places.forEach((insert,index) => {
            insert.addEventListener('click',() => {
                let position = document.getElementById(`${index + 1}`);
                console.log(position);
                    if(player) {
                        if(board[index] != 'X' && board[index] != 'O') {
                            board[index] = 'X';
                            position.textContent = "X";
                            console.log(board[index]);
                            boardLength++;
                            playerName.textContent = "Now playing: Player " + player0;
                            player = 0;
                        }
                    } else if(!player) {
                        if(board[index] != 'X' && board[index] != 'O') {
                            position.textContent = "O";
                            board[index] = 'O';
                            console.log(board[index]);
                            boardLength ++;
                            playerName.textContent = "Now playing: Player " + player1;
                            player = 1;
                        }
                    }
                    if(boardLength == maxValue) {
                        gameEnded(board, playerName);
                        boardLength++;
                    }
            });
        });
    };

const gameCheck = () => {

}

const gameEnded = (board, playerName) => {
    console.table(board);
    console.log('game Ended');
    playerName.textContent = "Game has ended";
}

game();