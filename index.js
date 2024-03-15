let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = '#a3d7f0';
context.fillRect(100, 100, 500, 500);

// context.lineWidth = 7;
// context.beginPath();
context.strokeStyle = '#f2f28f'
// context.rect(100 + context.lineWidth / 2, 100 + context.lineWidth / 2, 500 - context.lineWidth, 500 - context.lineWidth);
// context.stroke();

// context.beginPath();
context.lineWidth = 4;
context.strokeStyle = '#f2f28f'
// context.arc(350, 350, 100, 0, Math.PI * 2);
// context.stroke();

for (let i = 0; i < 5; i++) {
    let width = 82.5;
    let height = 82.5;
    let gap = 21;
    let x = 100 + (width + gap) * i
    let y = 100 + (height + gap) * i

    context.beginPath();
    context.rect(x + context.lineWidth / 2, y + context.lineWidth / 2, width, height);
    context.stroke();

    context.beginPath();
    context.rect(x + 12 + context.lineWidth / 2, y + 12 + context.lineWidth / 2, width - 24, height - 24);
    context.stroke();
}