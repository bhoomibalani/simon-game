let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
// let masxScore=0;


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started==false){
      console.log("game strated");
      started=true;
      levelup();
   }
 
});

function levelup(){
   userseq=[];
level++;

h2.innerText=`level ${level}`;

let randomIdx=Math.floor(Math.random()*3);
let randomcolour=btns[randomIdx];
let randombtn=document.querySelector(`.${randomcolour}`);
console.log(randomIdx);
console.log(randomcolour);
console.log(randombtn);

gameseq.push(randomcolour);
console.log(gameseq);
gameflash(randombtn);
}

function checkAns(idx){

    if(userseq[idx]===gameseq[idx]){
      if(userseq.length==gameseq.length){
         setTimeout(levelup,1000);
       
      }
    }
    else{
      h2.innerHTML=`game over !your score was ${level} <br> apress anykey to start`;
   //    if(maxScore<level){
   //       maxScore=level;
   //    }
   // h2.innerText=`your highest score is ${maxscore}`;

   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
   },150);
      reset();                                                        
    }
}


function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
btn.classList.remove("flash");
   },300);
}



function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
   btn.classList.remove("userflash");
},300);

}


function btnpress(){
   console.log("this", this);
let btn=this; 
userflash(btn);

usercolor=btn.getAttribute("id");
console.log(usercolor);
userseq.push(usercolor);

checkAns(userseq.length-1);

}

let allbtns=document.querySelectorAll("button");
for(btn of allbtns){
   btn.addEventListener("click",btnpress);

}

function reset(){
   started=false; 
   gameseq=[];
   userseq=[];
   level=0;
}





// function userflash(btn){
// btn.classList.add("userflash");
// setTimeout(function(){
//    btn.classList.remove("userflash");
// },300);

// }
