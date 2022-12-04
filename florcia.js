const main = document.querySelector('main');
const florcia = document.createElement('img');
florcia.setAttribute('src', './images/florcia.png');
florcia.classList.add('florcia');

let florciaTop = window.innerHeight / 2;
console.log(florciaTop);

main.appendChild(florcia);
let game = true;

// TODO unbug after deleting florcia keeps occuring
function opadanie() {
	florciaTop = florciaTop + 20;
	florcia.style.top = `${florciaTop}px`;
	if (florciaTop > window.innerHeight) {
		main.removeChild(florcia);
		game = false;
	}
}

async function podskok() {
	if (florciaTop <= 0) {
		florciaTop += 200;
	} else {
		florciaTop = florciaTop - 200;
	}
	florcia.style.top = `${florciaTop}px`;
}

opadanie();
let opadaniekota = setInterval(() => {
	if (game) {
		opadanie();
	} else {
		clearInterval(opadaniekota);
	}
}, 50);

document.addEventListener('keydown', () => {
	podskok();
});
document.addEventListener('touchstart', () => {
	podskok();
});
