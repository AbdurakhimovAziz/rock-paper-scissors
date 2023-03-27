const Game = require('./game');
const Computer = require('./computer');

const moves = process.argv.slice(2);

if (moves.length <= 1) {
  console.log('Please provide 3 or more arguments');
  process.exit(1);
}

if (moves.length % 2 === 0) {
  console.log('Please provide an odd number of arguments');
  process.exit(1);
}

const argsSet = new Set(moves);
if (argsSet.size !== moves.length) {
  console.log('Please provide unique arguments');
  process.exit(1);
}

const game = new Game(moves);
const computer = new Computer();
console.log('Game created', game);
const key = computer.generateCryptographicKey();
const move = computer.makeMove(moves);

const hmac = computer.generateHmac(key, move);
console.log('HMAC:', hmac);
