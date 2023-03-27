const Table = require('cli-table');

class CustomTable {
  static generateHelpTable(moves) {
    const table = new Table();

    table.push(['you \\ computer', ...moves]);

    const half = moves.length / 2;

    for (let i = 0; i < moves.length; i++) {
      const row = [moves[i]];
      for (let j = 0; j < moves.length; j++) {
        if (i === j) {
          row.push('Draw');
          continue;
        }

        const isPlayerWinner = i > j ? i - j <= half : j - i > half;
        row.push(isPlayerWinner ? 'Win' : 'Lose');
      }
      table.push(row);
    }

    return table;
  }
}

module.exports = CustomTable;
