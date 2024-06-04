let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset_btn");
let new_btn=document.querySelector("#new_btn");
let msg_container=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");


let turn0 = true;//player X,player O
let count=0; //to track draw

const win_pattern=[ [0,1,2],[0,3,6],[0,4,8], 
                    [1,4,7],
                    [2,4,6],[2,5,8],
                    [3,4,5],
                    [6,7,8],     
                ];


 const resetGame =()=>{
    turn0=true;
    count =0;
    enable_btn();
    msg_container.classList.add("hide");
  };

boxes.forEach((box) => {
  box.addEventListener("click", ()=>{
    // console.log("box click");
    if(turn0){
      box.innerText="O";
      box.style.color="green";
      turn0=false;
    }else{
      box.innerText="X";
      box.style.color="red";
      turn0=true;
    }
    box.disabled=true;
    count++;

   let isWinner= checkWinner();

   if(count===9 && !isWinner){
    gameDraw();
   }
  });
});

const gameDraw=()=>{
  msg.innerText=`Game was a draw`;
  msg.style.color="red";
  msg_container.classList.remove("hide");
  disable_btn();
};

const enable_btn=()=>{
  for( let box of boxes){
   box.disabled=false;
   box.innerText="";
  }
 }

const disable_btn=()=>{
 for( let box of boxes){
  box.disabled=true;
 }
}

const showWinner = (Winner)=>{
  msg.innerText=`Congratulations, winner is ${Winner}`;
  msg.style.color="green";
  msg_container.classList.remove("hide");
  disable_btn();
};

const checkWinner = () => {
   for(let pattern of win_pattern){
    // console.log(pattern[0],pattern[1],pattern[2]);
   
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;
    
      if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
          // console.log("Winner",pos1val);
          showWinner(pos1val);
        }
      }
   }
};

new_btn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);


