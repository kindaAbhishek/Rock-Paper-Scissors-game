let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");


const genCompChoice =() =>{
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame =() =>{
    // console.log("game was draw.");
    msg.innerText="game was draw. play again"
    msg.style.backgroundColor="#0a2e36";
};

const showWinner =(userWin, userChoice ,compChoice) =>{
    if(userWin){
        // console.log("you win!");
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText =`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText= compScore;
        // console.log("computer won");
        msg.innerText=` computer won. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame =(userChoice) =>{
    // console.log("user choice = ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice =", compChoice);

    if(userChoice=== compChoice){
        //draw Game
        drawGame();
    }else{
        let userWin= true;
        if(userChoice=== "rock"){
            // comp=> scissors,paper
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice==="paper"){
            //comp=> stone,scissors
            userWin=compChoice === "scissors"?true:false;

        }else if(userChoice==="scissors"){
            // comp => stone,paper
            userWin=compChoice==="stone"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});