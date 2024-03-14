let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = '#a3d7f0';
context.fillRect(100, 100, 500, 500);

context.lineWidth = 7;
context.beginPath();
context.strokeStyle = '#f2f28f'
context.rect(100 + context.lineWidth / 2, 100 + context.lineWidth / 2, 500 - context.lineWidth, 500 - context.lineWidth);
context.stroke();

context.beginPath();
context.strokeStyle = '#f2f28f'
context.arc(350, 350, 100, 0, Math.PI * 2);
context.stroke();