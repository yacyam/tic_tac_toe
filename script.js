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
