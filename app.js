const game = () => {

    const board =   ['', '', '',
                     '', '', '',
                     '', '', ''];
    let player = 1;
    // 1 = X
    // 0 = O

    const maxValue = 9;
    let boardLength = 0;

    const places = document.querySelectorAll(".main-game__place");

        places.forEach((insert,index) => {
            insert.addEventListener('click',() => {
                    if(player) {
                        if(board[index] != 'X' && board[index] != 'O') {
                            board[index] = 'X';
                            console.log(board[index]);
                            boardLength++;
                            player = 0;
                        }
                    } else if(!player) {
                        if(board[index] != 'X' && board[index] != 'O') {
                            board[index] = 'O';
                            console.log(board[index]);
                            boardLength ++;
                            player = 1;
                        }
                    }
                    if(boardLength == maxValue) {
                        gameEnded(board);
                    }
            });
        });
    };

const gameCheck = () => {

}

const gameEnded = (board) => {
    console.table(board);
    console.log('game Ended');
}

game();