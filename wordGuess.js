let words = ["javascript", "coding", "computer", "programming", "python"];
let word = "";
let guessedLetters = [];
let wrongGuesses = 0;
let allowedGuesses = 6;

const randWord = () => {
	let index = Math.floor(Math.random() * words.length);
	word = words[index];
}

const displayWord = () => {
	let dWord = "";
	for(let i = 0; i < word.length; i++){
		if(guessedLetters.includes(word[i])){
			dWord += word[i] + " ";
		}else{
			dWord += "_ ";
		}
	}
	return dWord;
}

const isCorrect = (letter) => {
	return word.includes(letter);
}

const playGame = () => {
	randWord();
	console.log("Wlecome to the Guess the Word Game! \nYou have 6 incorrect guesses allowed.");
	
	while(wrongGuesses < allowedGuesses){
		let theWord = displayWord();
		let guess = prompt("Current Word: " + theWord + "\nGuess a letter: ").toLowerCase();
		
		if(guessedLetters.includes(guess)){
			console.log("You already guessed that letter. Try again.");
		}
		
		if(isCorrect(guess) && !guessedLetters.includes(guess)){
			console.log("Good Job!  The Letter '" + guess + "' is in the word");
		}else if (!isCorrect(guess) && !guessedLetters.includes(guess)){
			wrongGuesses++;
			console.log("Sorry, '" + guess + "' is not in the word. You have " +
			(allowedGuesses - wrongGuesses) + " attempts left.");
		}
		guessedLetters[guessedLetters.length] = guess;
		let allGuessed = true;
		for(let i = 0; i < word.length; i++ ){
			if(!guessedLetters.includes(word[i])){
				allGuessed = false;
				break;
			}
		}
		
		if(allGuessed){
			console.log("Congratulations! You guessed the word: " + word);
			return;
		}
	}
	console.log("Game Over! The word was: " + word);
}