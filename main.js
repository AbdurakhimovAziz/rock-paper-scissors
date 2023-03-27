class Main {
  generateMenu(moves) {
    let menu = moves.reduce((acc, move, index) => {
      return (acc += `${index + 1} - ${move}\n`);
    }, 'Available moves:\n');

    menu += '0 - exit\n';
    menu += '? - help';
    return menu;
  }

  checkArguments(args) {
    const example = 'node index.js rock paper scissors';
    if (args.length <= 1) {
      console.log('Please provide 3 or more arguments. For example:', example);
      process.exit(1);
    }

    if (args.length % 2 === 0) {
      console.log(
        'Please provide an odd number of arguments. For example:',
        example
      );
      process.exit(1);
    }

    if (new Set(args).size !== args.length) {
      console.log('Please provide unique arguments. For example:', example);
      process.exit(1);
    }
  }
}

module.exports = Main;
