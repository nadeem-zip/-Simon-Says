let gameSeq =[];
let userSeq=[];

let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress", function(){
    console.log("key pressed");
    started=true;
    levelUp();
});

function gameFlash(btn) {
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},450);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }

function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;

//selecting random button
let randomIndex=Math.floor(Math.random()*4);
let randomColor=btns[randomIndex];
let randomBtn=document.querySelector(`.${randomColor}`)
gameSeq.push(randomColor);
console.log(gameSeq);
gameFlash(randomBtn);

}
function checkAns(index){
    console.log("current level",level);
    // let index=level-1;
    if(userSeq[index]==gameSeq[index]){
        if(userSeq.length==gameSeq.length){
           setTimeout( levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`game over ! <b> Your Score Was ${level} </br>press any key to start`;
        reset();

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);
    
    }

}
function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

 let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level =0;


}
