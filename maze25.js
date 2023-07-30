const ROWS = 5;
const COLS = 5;

const maze = [
    ['S', '#', '#', '#', '#'],
    [' ', ' ', '#', '#', '#'],
    ['#', ' ', ' ', ' ', '#'],
    ['#', '#', '#', ' ', '#'],
    ['#', '#', '#', 'D', '#']
];



let playerX = 0;
let playerY = 0;

function printMaze() {
    let output = '';
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            output += maze[i][j] + ' ';
        }
        output += '\n';
    }
    document.getElementById('maze').textContent = output;
}

function isValidMove(x, y) {
    return x >= 0 && x < ROWS && y >= 0 && y < COLS && maze[x][y] !== '#';
}

function move(direction) {
//	console.log("aa");
    let newX = playerX;
    let newY = playerY;

    if (direction === 'W') {
        newX--;
    } else if (direction === 'S') {
        newX++;
    } else if (direction === 'A') {
        newY--;
    } else if (direction === 'D') {
        newY++;
    } else {
        return; // Invalid move, do nothing
    }
	console.log(isValidMove(newX, newY));
 if (maze[playerX][playerY] === maze[4,3]) {
	 console.log("you won");
            document.getElementById('message').textContent = "Congratulations! You reached the destination!";
        } else {
            document.getElementById('message').textContent = "Enter your move (W for up, S for down, A for left, D for right):";
        }
    if (isValidMove(newX, newY)) {
        maze[playerX][playerY] = ' ';
        playerX = newX;
        playerY = newY;
        maze[playerX][playerY] = 'B';

        printMaze();

       
    } else {
        document.getElementById('message').textContent = " ";
    }
	
}

printMaze()
