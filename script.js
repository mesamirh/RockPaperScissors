function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();
    let validChoices = ["rock", "paper", "scissors"];
    if (validChoices.includes(choice)) {
        return choice;
    } else {
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return 'tie';
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        return 'human';
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        return 'computer';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        if (humanChoice !== null) {
            let computerChoice = getComputerChoice();
            let result = playRound(humanChoice, computerChoice);
            if (result === 'human') {
                humanScore++;
            } else if (result === 'computer') {
                computerScore++;
            }
        } else {
            console.log("Invalid choice. Please choose rock, paper, or scissors.");
            i--; // repeat the round for invalid choice
        }
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins overall. Better luck next time!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playGame();