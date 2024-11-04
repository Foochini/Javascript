let userScore = 0;
let computerScore = 0;

const getUserInput = () => {
    let input = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
    return input;
};

const getComputerDecision = () => {
    const rand = Math.floor(Math.random() * 3);
    if(rand === 0){
		return 'rock';
	}else if(rand === 1){
		return 'paper';
	}else if(rand === 2){
		return 'scissors';
	}
};

const findWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "tie";
    }
    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        return "user";
    }
    return "computer";
};

const playRound = () => {
    const userChoice = getUserInput();
    const computerChoice = getComputerDecision();
    const winner = findWinner(userChoice, computerChoice);

    if (winner === "user") {
        userScore++;
        console.log("You win this round!");
    } else if (winner === "computer") {
        computerScore++;
        console.log("Computer wins this round!");
    } else {
        console.log("It's a tie!");
    }
    console.log('You chose: ' + userChoice + ', Computer chose: ' + computerChoice);
    console.log('Score - You: ' + userScore + ', Computer: ' + computerScore);
};

const playGame = () => {
    playRound();
    if (userScore < 3 && computerScore < 3) {
        playGame();
    } else {
        if (userScore === 3) {
            console.log("User wins the game!");
        } else {
            console.log("Computer wins the game!");
        }
    };
};
