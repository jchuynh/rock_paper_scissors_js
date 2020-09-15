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
	const choices = ['Rock', 'Paper', 'Scissors'];
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


function win(user, computer) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${user} beats ${computer}. You Win!`;
	document.getElementById(user).classList.add('green-glow');
}

function lose(user, computer) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${computer} looses to ${user}. You Lose!`;
}

function draw(user, computer) {
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${computer} is the same as ${user}. Draw!`;
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'RockScissors':
		case 'PaperRock':
		case 'ScissorsPaper':
			win(userChoice, computerChoice);
			break;
		case 'RockPaper':
		case 'PaperScissors':
		case 'ScissorsRock':
			lose(userChoice, computerChoice);
			break;
		case 'RockRock':
		case 'PaperPaper':
		case 'ScissorsScissors':
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game('Rock');
	})

	paper_div.addEventListener('click', function() {
		game('Paper');
	})

	scissors_div.addEventListener('click', function() {
		game('Scissors');
	})
}

main();