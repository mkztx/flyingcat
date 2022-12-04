let monitorHeight = window.innerHeight;
let monitorWidth = window.innerWidth;
let rightPos;
function tworzenieKolumny() {
	const kolumna = document.createElement('div');
	const gora = document.createElement('img');
	const dol = document.createElement('img');

	kolumna.classList.add('kolumna');
	kolumna.style.right = '-200px';

	gora.setAttribute('src', './images/klapekgora.png');
	gora.classList.add('gora');
	dol.setAttribute('src', './images/klapekdol.png');
	dol.classList.add('dol');
	kolumna.appendChild(gora);
	kolumna.appendChild(dol);
	main.appendChild(kolumna);
	let klapki = kolumna.querySelectorAll('img');
	klapki.forEach((klapek) => {
		klapek.style.height = `${(monitorHeight - 200) / 2}px`;
	});
	rightPos = 0;
}

function przesuwanieKolumn() {
	rightPos += 10;
	const kolumna = document.querySelector('.kolumna');
	kolumna.style.right = `${rightPos}px`;
	if (rightPos > monitorWidth + 200) {
		main.removeChild(kolumna);
		tworzenieKolumny();
	}
}
tworzenieKolumny();

let przesuwanie = setInterval(() => {
	przesuwanieKolumn();
}, 50);
