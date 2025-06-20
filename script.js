let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let comp = document.getElementById("comp-score");
let user = document.getElementById("user-score");
let msg = document.getElementById("msg");
let userScore = 0;
let compScore = 0;
const incrementScore = (choice) => {
    let choices = ["rock", "paper", "scissor"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)];

    if (choice === compChoice) {
        msg.innerText = "It's a tie!";
        msg.style.backgroundColor = "blue";
    }
    else if ((choice === "rock" && compChoice === "scissor") || (choice === "paper" && compChoice === "rock") || (choice === "scissor" && compChoice === "paper")) {
        userScore++;
        user.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You won! ${choice} beats ${compChoice}`;
    }
    else {
        compScore++;
        comp.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You lost! ${compChoice} beats ${choice}`;
    }

}
rock.addEventListener("click", () => {
    incrementScore("rock");
})
paper.addEventListener("click", () => {
    incrementScore("paper");
})
scissor.addEventListener("click", () => {
    incrementScore("scissor");
})