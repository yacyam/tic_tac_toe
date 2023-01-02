let box1 = [0, document.getElementById("box1")];
let box2 = [1, document.getElementById("box2")];
let box3 = [2, document.getElementById("box3")];
let box4 = [3, document.getElementById("box4")];
let box5 = [4, document.getElementById("box5")];
let box6 = [5, document.getElementById("box6")];
let box7 = [6, document.getElementById("box7")];
let box8 = [7, document.getElementById("box8")];
let box9 = [8, document.getElementById("box9")];

const gameboard = () => {
    let board = ['', '', '', '', '', '', '', '', ''];
    let player = 'one';

    const onClick = box =>{
        if(checkforEnd()){
            return;
        }
        if(checkForClick(box[0])){
            if(player === 'one'){
                board[box[0]] = 'X';
                box[1].innerHTML = board[box[0]];
            }
            else{
                board[box[0]] = 'O';
                box[1].innerHTML = board[box[0]];
            }
            changePlayer();
        }
    }
    const checkForClick = box => {
        return board[box] === '';
    }
    const changePlayer = () => {
        if(player === 'one'){
            player = 'two';
        }
        else{
            player = 'one';
        }
    }

    const checkforEnd = () => {
        if(board[0] === 'X' || board[0] === 'O'){
            if(board[1] === 'X' && board[2] === 'X' && board[0] === 'X'){
                return true;
            }
            if(board[1] === 'O' && board[2] === 'O' && board[0] === 'O'){
                return true;
            }
            if(board[4] === 'X' && board[8] === 'X' && board[0] === 'X'){
                return true;
            }
            if(board[4] === 'O' && board[8] === 'O' && board[0] === 'O'){
                return true;
            }
            if(board[3] === 'X' && board[6] === 'X' && board[0] === 'X'){
                return true;
            }
            if(board[3] === 'O' && board[6] === 'O' && board[0] === 'O'){
                return true;
            }
        }
        if(board[3] === 'X' || board[3] === 'O'){
            if(board[4] == 'X' && board[5] === 'X' && board[3] === 'X'){
                return true;
            }
            if(board[4] == 'O' && board[5] === 'O' && board[3] === 'O'){
                return true;
            }
        }
        
    }

    return {onClick};
};

const game = gameboard();

document.body.addEventListener('click', (event) => {
    if(box1[1].contains(event.target)){
        game.onClick(box1);
    }
    if(box2[1].contains(event.target)){
        game.onClick(box2);
    }
    if(box3[1].contains(event.target)){
        game.onClick(box3);
    }
    if(box4[1].contains(event.target)){
        game.onClick(box4);
    }
    if(box5[1].contains(event.target)){
        game.onClick(box5);
    }
    if(box6[1].contains(event.target)){
        game.onClick(box6);
    }
    if(box7[1].contains(event.target)){
        game.onClick(box7);
    }
    if(box8[1].contains(event.target)){
        game.onClick(box8);
    }
    if(box9[1].contains(event.target)){
        game.onClick(box9);
    }
});
