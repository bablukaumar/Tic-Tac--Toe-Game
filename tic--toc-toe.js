let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turno=true;//players x, players O
const winpattern=[
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8],



];

const resetgame=()=>{
    turno=true;
    anableboxes();
    msgContainer.classList.add("hide");

}

boxes.forEach( (box) => {
    box.addEventListener("click",()=>{
        if(turno){//player O
            box.innerText="O";
            
        
            turno=false;
        }
        else{//player X
            box.innerText="X";
            turno=true;

        }
            box.disabled=true;
            chekwinner();
    });
});

const anableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations.winner is " ${winner}"`;
    msgContainer.classList.remove("hide");
   // disableboxes();
}
const chekwinner=()=>{
    for(let pattern of winpattern){
       // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val !="" && pos3val!=""){
            if(pos1val=== pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }

        }




    }

};


newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

