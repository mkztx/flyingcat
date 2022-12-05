let play = 1;

function checkForLose() {
	const florcia = document?.querySelector('.florcia');
	const opponent = document?.querySelector('.dol');

	let florciaPosition = florcia?.getBoundingClientRect();
	let opponentPosition = opponent?.getBoundingClientRect();
	if (
		opponentPosition?.right > florciaPosition?.left &&
		opponentPosition?.left < florciaPosition?.right &&
		opponentPosition?.bottom > florciaPosition?.top &&
		opponentPosition?.top < florciaPosition?.bottom
	) {
		main.removeChild(florcia);
		play = 0;
		lose();
	}
	const opponent2 = document?.querySelector('.gora');
	let opponentPosition2 = opponent2?.getBoundingClientRect();
	if (
		opponentPosition2?.right > florciaPosition?.left &&
		opponentPosition2?.left < florciaPosition?.right &&
		opponentPosition2?.bottom > florciaPosition?.top &&
		opponentPosition2?.top < florciaPosition?.bottom
	) {
		main.removeChild(florcia);
		play = 0;
		lose();
	}
}

let checking = setInterval(() => {
	if (play) {
		checkForLose();
	} else {
		clearInterval(checking);
	}
}, 10);

function lose() {
	const gameScore = document.querySelector('.score');
	const mainPagePart = document.querySelector('main');
	const bodyOfPage = document.querySelector('body');
	const loseMessage = document.createElement('div');
	loseMessage.classList.add('score');
	loseMessage.innerText = 'You lost \n Your Score is:';
	loseMessage.style.top = `30%`;
	loseMessage.style.left = `50%`;
	loseMessage.style.textAlign = `center`;

	loseMessage.style.transform = `translate(-50%,-50%)`;
	bodyOfPage.appendChild(loseMessage);
	bodyOfPage.removeChild(mainPagePart);
	gameScore.style.top = `50%`;
	gameScore.style.left = `50%`;
	gameScore.style.transform = `translate(-50%,-50%)`;
	gameScore.style.textAlign = `center`;
	bodyOfPage.appendChild(gameScore);
}
