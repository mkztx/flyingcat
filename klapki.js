let monitorHeight = window.innerHeight;
let monitorWidth = window.innerWidth;
let rightPos;
let score = 0;
let speed = 15;
function tworzenieKolumny() {
	let randomizacja = Math.floor(Math.random() * 1000);
	let ujemneDodatnie = Math.floor(Math.random() * 2);
	console.log(ujemneDodatnie);
	if (ujemneDodatnie) {
		randomizacja = randomizacja;
	} else {
		randomizacja = -randomizacja;
	}
	const kolumna = document.createElement('div');
	const gora = document.createElement('img');
	const dol = document.createElement('img');

	kolumna.classList.add('kolumna');
	kolumna.style.right = '-200px';
	if (window.innerHeight > window.innerWidth) {
		gora.style.width = `100px`;
		dol.style.width = `100px`;
	}
	gora.setAttribute('src', './images/klapekgora.png');
	gora.classList.add('gora');
	dol.setAttribute('src', './images/klapekdol.png');
	dol.classList.add('dol');
	kolumna.appendChild(gora);
	kolumna.appendChild(dol);
	main.appendChild(kolumna);

	gora.style.height = `${monitorHeight / 2 + randomizacja}px`;
	dol.style.height = `${monitorHeight / 2 - randomizacja}px`;
	rightPos = 0;

	const scoreBoard = document.querySelector('.score');
	scoreBoard.innerText = `Score = ${score}`;
	speed += 1;
}

function przesuwanieKolumn() {
	if (window.innerHeight > window.innerWidth) {
		rightPos += speed / 2;
	} else {
		rightPos += speed;
	}
	const kolumna = document.querySelector('.kolumna');
	kolumna.style.right = `${rightPos}px`;
	if (rightPos > monitorWidth + 200) {
		score++;
		main.removeChild(kolumna);
		tworzenieKolumny();
	}
}
tworzenieKolumny();

let przesuwanie = setInterval(() => {
	przesuwanieKolumn();
}, 50);
