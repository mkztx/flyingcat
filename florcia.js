const main = document.querySelector('main');
const florcia = document.createElement('img');
florcia.setAttribute('src', './images/florcia.png');
florcia.classList.add('florcia');

let florciaTop = window.innerHeight / 2;
console.log(florciaTop);

main.appendChild(florcia);

function opadanie() {
	florciaTop = florciaTop + 10;
	florcia.style.top = `${florciaTop}px`;
}

function podskok() {
	florciaTop = florciaTop - 200;
	florcia.style.top = `${florciaTop}px`;
}

opadanie();
setInterval(() => {
	opadanie();
}, 50);

document.addEventListener('keydown', () => {
	podskok();
});
document.addEventListener('touchstart', () => {
	podskok();
});
