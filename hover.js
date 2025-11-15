let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =  document.querySelector("#user-score");
const computerScorePara =  document.querySelector("#computer-score");

 const drawGame =()=>{
   
    msg.innerText = ("Game was draw!!!");
    msg.style.backgroundColor = "#081b31";

 }
const showUserWin =(userWin)=>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
    console.log("you win the game");
    msg.innerText = ("you win!!!");
    msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        computerScorePara.innerText = compScore;
          console.log("you lose the game");
        msg.innerText = ("you lose!")
          msg.style.backgroundColor = "red";

    
    }
}

const compChoice = ()=>{
const options = ["rock","paper","scissors"];
    const redIdx = Math.floor(Math.random() * 3);
    return options[redIdx];
}
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const computerChoice = compChoice();
    console.log("computer choice=",computerChoice);
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice ==="paper" ? false : true;

        }
        else if(userChoice ==="paper"){
            userWin = computerChoice ==="scissors" ? false : true ;
        }
        else {
           userWin =  computerChoice === "rock" ? false : true;      
          }
          showUserWin(userWin);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});
