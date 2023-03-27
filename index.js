const prompt = require('prompt-sync')({ sigint: true });
const Game = require('./game');
const Computer = require('./computer');
const Main = require('./main');

const arguments = process.argv.slice(2);

const main = new Main();
main.checkArguments(arguments);

const game = new Game(arguments);
const moves = game.getMoves();
const menu = main.generateMenu(moves);
const computer = new Computer();

const key = computer.generateCryptographicKey();
const computerMove = computer.makeMove(moves);
const hmac = computer.generateHmac(key, computerMove);
console.log('HMAC:', hmac);

let playerOption = '';
do {
  console.log(menu);
  playerOption = prompt('Enter your move: ');

  if (playerOption === '?') {
    console.log('some help');
    continue;
  }

  if (playerOption === '0') {
    console.log('Bye!');
    break;
  }

  const playerMove = moves[playerOption - 1];

  if (playerMove === undefined) {
    console.log('Invalid move\n');
    continue;
  }

  const winner = game.getWinner(playerMove, computerMove);
  console.log('Your move:', playerMove, '\nComputer move:', computerMove);
  console.log(winner);
  console.log('Key:', key, '\n');
  break;
} while (playerOption !== '0');
