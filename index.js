let boxes = document.querySelectorAll('.box');
let btn = document.querySelector('#reset-btn');
let newGamebtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.mesg-contaner');
let meg =document.querySelector('#meg');


let torn0 = true;
const winer = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    torn0=true;
    enbleboxes();
    msgContainer.classList.add('hide');
};

boxes.forEach((box) => {  // Fixed syntax error
    box.addEventListener('click', () => {
        if (torn0) {
            box.innerText = 'O';
            torn0 = false;
        } else {
            box.innerText = 'X';
            torn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
    
});
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enbleboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerHTML='';
    }
};
const showWiner= (winner)=>{
    meg.innerText=`Congratulation, winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes();

};


const checkwinner=()=>{
    for (let pattern of winer){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !=''&& pos2Val !='' && pos3Val !=''){
            if(pos1Val=== pos2Val && pos2Val=== pos3Val){
                console.log('winner',pos1Val);
                showWiner(pos1Val);
            }
        }
    }
}
newGamebtn.addEventListener('click',resetGame);
btn.addEventListener('click',resetGame)
