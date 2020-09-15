let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score'); // _span DOM variables
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// function convertToWord(letter) {
// 	if (letter === "r") return "Rock";
// 	if (letter === "p") return "Paper";
// 	if (letter === "s") return "Scissors";
// }

// console.log(getComputerChoice());

// getComputerChoice();

const capitalizeWord = (word) => {
	if (typeof word !== 'string') return ''
	return word.charAt(0).toUpperCase() + word.slice(1)
}

function win(user, computer) {
	const userChoice_div = document.getElementById(user);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${capitalizeWord(user)} beats ${capitalizeWord(computer)}. You Win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, computer) {
	const userChoice_div = document.getElementById(user);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${capitalizeWord(computer)} looses to ${capitalizeWord(user)}. You Lose!`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, computer) {
	const userChoice_div = document.getElementById(user);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${capitalizeWord(computer)} is the same as ${capitalizeWord(user)}. Draw!`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			win(userChoice, computerChoice);
			break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			lose(userChoice, computerChoice);
			break;
		case 'rockrock':
		case 'paperpaper':
		case 'scissorsscissors':
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game('rock');
	})

	paper_div.addEventListener('click', function() {
		game('paper');
	})

	scissors_div.addEventListener('click', function() {
		game('scissors');
	})
}

main();