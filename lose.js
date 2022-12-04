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
	}
}

let checking = setInterval(() => {
	if (play) {
		checkForLose();
	} else {
		clearInterval(checking);
	}
}, 10);
