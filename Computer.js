const crypto = require('crypto');

class Computer {
  generateCryptographicKey() {
    const key = crypto.randomBytes(256);
    return key;
  }

  makeMove(moves) {
    const index = Math.floor(Math.random() * moves.length);
    console.log(index, moves);

    return moves[index];
  }

  generateHmac(key, move) {
    const hmac = crypto.createHmac('sha3-256', key);
    hmac.update(move);
    return hmac.digest('hex');
  }
}

module.exports = Computer;
