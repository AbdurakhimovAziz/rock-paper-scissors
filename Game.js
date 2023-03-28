class Game {
  constructor(moves) {
    this.moves = moves.map((move) => move.trim());
  }

  getWinner(playerMove, computerMove) {
    const playerIndex = this.moves.indexOf(playerMove);
    const computerIndex = this.moves.indexOf(computerMove);

    if (playerIndex === computerIndex) {
      return 'draw';
    }

    const half = this.moves.length / 2;

    const isPlayerWinner =
      playerIndex > computerIndex
        ? playerIndex - computerIndex <= half
        : computerIndex - playerIndex > half;

    return isPlayerWinner ? 'You won!' : 'Computer won!';
  }

  getMoves() {
    return this.moves;
  }
}

module.exports = Game;
