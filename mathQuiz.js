const ques1 = 'What is 15 - 5?';
const ques2 = 'What is 2 * 4?';
const ques3 = 'What is 10 / 2?';
const ques4 = 'What is 15 + 15?';
const ques5 = 'What is 1 + 1 + 1';
const ans1 = 10;
const ans2 = 8;
const ans3 = 5;
const ans4 = 30;
const ans5 = 3;
let score = 0;
let index = 0;
let userAns;
const askQues = () => {
	if(index === 0){
		userAns = Number(prompt(ques1));
	}else if(index === 1){
		userAns = Number(prompt(ques2));
	}else if(index === 2){
		userAns = Number(prompt(ques3));
	}else if(index === 3){
		userAns = Number(prompt(ques4));
	}else if(index === 4){
		userAns = Number(prompt(ques5));
	};
	ansCheck();
};
const ansCheck = () => {
	if(userAns === ans1 || userAns === ans2 || userAns === ans3 || userAns === ans4 || 
	userAns === ans5){
		console.log('Correct!');
		score++;
		index++;
	}else if(index === 0){
		console.log('Incorrect! The correct answer was: ' + ans1);
		index++;
	}else if(index === 1){
		console.log('Incorrect! The correct answer was: ' + ans2);
		index++;
	}else if(index === 2){
		console.log('Incorrect! The correct answer was: ' + ans3);
		index++;
	}else if(index === 3){
		console.log('Incorrect! The correct answer was: ' + ans4);
		index++;
	}else if(index === 4){
		console.log('Incorrect! The correct answer was: ' + ans5);
		index++;
	};
	playGame();
};
const playGame = () => {
	if(index < 5){
		askQues();
	}else if(index === 5){
		console.log('Quiz over! Your score was ' + score + ' out of 5.');
	};
};