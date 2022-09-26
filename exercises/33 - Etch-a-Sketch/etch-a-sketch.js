const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

const { width, height } = canvas;

// Start the etch-a-sketch in the center
let x = width / 2;
let y = height / 2;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
ctx.strokeStyle = 'black';

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      if (y > 0) {
        y -= MOVE_AMOUNT;
      }
      break;
    case 'ArrowDown':
      if (y < height) {
        y += MOVE_AMOUNT;
      }
      break;
    case 'ArrowRight':
      if (x < width) {
        x += MOVE_AMOUNT;
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        x -= MOVE_AMOUNT;
      }
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

window.addEventListener('keydown', handleKey);
