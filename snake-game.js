const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const box = 20;

let snake = [{
    x: 10 * box,
    y: 10 * box
}];

let food = {
    x: Math.floor(Math.random() * 18 + 1) * box,
    y: Math.floor(Math.random() * 18 + 1) * box
};

let d;
let score = 0;
let game;
let isPaused = false;

document.addEventListener('keydown', direction);

function direction(event) {
    if (event.keyCode === 37 && d !== 'RIGHT') {
        d = 'LEFT';
    } else if (event.keyCode === 38 && d !== 'DOWN') {
        d = 'UP';
    } else if (event.keyCode === 39 && d !== 'LEFT') {
        d = 'RIGHT';
    } else if (event.keyCode === 40 && d !== 'UP') {
        d = 'DOWN';
    } }

function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw boundaries
    ctx.strokeStyle = '#39FF14';
    ctx.strokeRect(box, box, canvas.width - box * 2, canvas.height - box * 2);

    // Drawing snake
    snake.forEach(segment => {
        ctx.fillStyle = 'green';
        ctx.fillRect(segment.x, segment.y, box, box);
    });

    // Drawing food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Movement
    if (d === 'LEFT') snakeX -= box;
    if (d === 'UP') snakeY -= box;
    if (d === 'RIGHT') snakeX += box;
    if (d === 'DOWN') snakeY += box;

    // If the snake eats the food
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 18 + 1) * box,
            y: Math.floor(Math.random() * 18 + 1) * box
        };
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Game over conditions
    if ((snakeX < box || snakeX >= canvas.width - box || snakeY < box || snakeY >= canvas.height - box) &&
        !((d === 'LEFT' && snakeX === box) || (d === 'UP' && snakeY === box) ||
        (d === 'RIGHT' && snakeX === canvas.width - box) || (d === 'DOWN' && snakeY === canvas.height - box)) ||
        checkCollision(newHead, snake)) {
        clearInterval(game);
        alert('Game Over! Your Score: ' + score);
        location.reload();
    }

    snake.unshift(newHead);

    // Display score at the bottom
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    let scoreText = 'Score: ' + score;
    let textWidth = ctx.measureText(scoreText).width;
    ctx.fillText(scoreText, (canvas.width - textWidth) / 2, canvas.height - 1);
}

function checkCollision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

game = setInterval(drawSnake, 100);