const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'));
const ctx = canvas.getContext('2d');

// Set line width
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'rgba(25,200,0, 0.5)';

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
ctx.fill();

const img = /**@type {HTMLImageElement} */ (document.getElementById('bug'));
ctx.drawImage(img, 200, 100, 200, 200, 0, 0, 200, 200);