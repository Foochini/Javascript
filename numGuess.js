let guess;
let randNum = Math.floor(Math.random() * 100) + 1;;
const checkGuess = () => {
	if(guess > randNum){
		console.log('Your guess of ' + guess + ' is too high. Try Again!');
		return false;
	}else if(guess < randNum){
		console.log('Your guess of ' + guess + ' is too low. Try Again!');
		return false;
	}else if(guess === randNum){
		console.log('Congratulations! Your guessed the correct number: ' + guess);
		return true;
	};
};
const playGame = () => {
	let input = prompt('Guess a number between 1 - 100: ');
	guess = Number(input);
	if(!checkGuess()){
		playGame();
	};
};
