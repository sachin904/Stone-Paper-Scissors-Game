let userScore=0;
let compScore=0;
let choices= document.querySelectorAll(".circle");
const msg=document.querySelector("#msg");
let userScorepara=document.querySelector("#user-score");
let compScorepara=document.querySelector("#comp-score")
const drawgame=()=>
{
    console.log("the game is draw!!!!");
    msg.innerText="the game is draw! plag again";
    msg.style.backgroundColor=" #081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText= userScore;
        console.log("you win!");
        msg.innerText="  you win!your  "+userChoice+ "  beats "+compChoice;
        msg.style.backgroundColor="green";
     }else{
        compScore++;
        compScorepara.innerText=compScore;
       console.log("you lose");
       msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor="red";
    }
}
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice)
    {
        drawgame();

    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;

        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
      showWinner(userWin,userChoice,compChoice); 
    }
  

};
choices.forEach((circle)=>{
   circle.addEventListener("click",()=>{
    const userChoice= circle.getAttribute("id");
    playGame(userChoice);
   

   }) ;
});
