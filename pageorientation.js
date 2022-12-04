let height = window.innerHeight;
let width = window.innerWidth;
if (height > width) {
	florcia.style.width = '15%';
	florcia.style.aspectRatio = '2/1';
	florcia.style.left = '10%';
} else {
	florcia.style.height = '10%';
	florcia.style.aspectRatio = '2/1';
	florcia.style.left = '20%';
}
