const choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let computer = document.querySelector("#compScore");
let user = document.querySelector("#userScore");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

const playGame = (userChoice) => {
    let compChoice = genComputerChoice(); 
    if(compChoice === "rock" && userChoice === "scissors") {
        msg.innerText = "You loss!, rock beats scissors";
        msg.style.backgroundColor = "red";
        compScore++;
        computer.innerText = compScore;
    } else if(compChoice === "rock" && userChoice === "paper") {
        msg.innerText = "You win!, paper beats rock";
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    } else if(compChoice === "paper" && userChoice === "rock") {
        msg.innerText = "You loss!, paper beats rock";
        msg.style.backgroundColor = "red";
        compScore++;
        computer.innerText = compScore;
    } else if(compChoice === "paper" && userChoice === "scissors") {
        msg.innerText = "You win!, scissors beats paper";
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    } else if(compChoice === "scissors" && userChoice === "rock") {
        msg.innerText = "You win!, rock beats scissors";
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    } else if(compChoice === "scissors" && userChoice === "paper") {
        msg.innerText = "You loss!, scissors beats paper";
        msg.style.backgroundColor = "red";
        compScore++;
        computer.innerText = compScore;
    } else {
        msg.innerText = "Draw!";
        msg.style.backgroundColor = "#081b31";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice); 
    });
});