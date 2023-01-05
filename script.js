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
    let player = 'One';
    let ended = false;
    let tie = false;

    const onClick = box => {
        if(checkForClick(box[0])){
            if(player === 'One'){
                board[box[0]] = 'X';
                box[1].innerHTML = board[box[0]];
            }
            else{
                board[box[0]] = 'O';
                box[1].innerHTML = board[box[0]];
            }
            checkforEnd();
            checkForTie();
            if(ended){
                displayWinner(true);
                return;
            }
            else{
                changePlayer();
            }
        }
    }

    const checkForClick = box => {
        return board[box] === '';
    }

    const changePlayer = () => {
        if(player === 'One'){
            player = 'Two';
        }
        else{
            player = 'One';
        }
    }

    const checkforEnd = () => {
        for(let i = 0; i < 3; i++){
            if(board[i] === 'X' && board[i + 3] === 'X' && board[i + 6] === 'X'){
                ended = true;
            }
            if(board[i] === 'O' && board[i + 3] === 'O' && board[i + 6] === 'O'){
                ended = true;
            }
        }
        for(let i = 0; i < 7; i += 3){
            if(board[i] === 'X' && board[i + 1] === 'X' && board[i + 2] === 'X'){
                ended = true;
            }
            if(board[i] === 'O' && board[i + 1] === 'O' && board[i + 2] === 'O'){
                ended = true;
            }
        }

        if(board[0] === 'X' && board[4] === 'X' && board[8] === 'X'){
            ended = true;
        }
        if(board[0] === 'O' && board[4] === 'O' && board[8] === 'O'){
            ended = true;
        }

        if(board[2] === 'X' && board[4] === 'X' && board[6] === 'X'){
            ended = true;
        }
        if(board[2] === 'O' && board[4] === 'O' && board[6] === 'O'){
            ended = true;
        }
    }

    const hasEnded = () => {
        return ended;
    }

    const checkForTie = () => {
        let count = 0;
        for(let i = 0; i < board.length; i++){
            if(board[i] !== ''){
                count++;
            }
        }
        if(count === 9){
            tie = true;
            ended = true;
            return tie;
        }
    }

    const resetGame = () => {
        player = 'One';
        board = ['', '', '', '', '', '', '', '', ''];
        box1[1].innerHTML = '';
        box2[1].innerHTML = '';
        box3[1].innerHTML = '';
        box4[1].innerHTML = '';
        box5[1].innerHTML = '';
        box6[1].innerHTML = '';
        box7[1].innerHTML = '';
        box8[1].innerHTML = '';
        box9[1].innerHTML = '';
        ended = false;
        tie = false;
        displayWinner(ended);
    }

    const displayWinner = (obj) => {
        if(obj){
            document.getElementById('winner').innerText = `Winner: Player ${player}`;
        }
        else if(tie){
            document.getElementById('winner').innerText = `Winner: Both`;
        }
        else{
            document.getElementById("winner").innerHTML = `Winner: `;
        }
    }

    return {onClick, resetGame, hasEnded};
};

const game = gameboard();

document.body.addEventListener('click', (event) => {
    if(!game.hasEnded()){
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
    }
});

function reset(){
    game.resetGame();
}