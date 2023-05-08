let { testNumber } = require("./game.js");

process.stdout.write(
  'I\'m thinking of a number from 1 through 10. What do you think it is? \n(Write "quit" to give up.)\n\nIs the number ... '
);

let playGame = (userInput) => {
  let input = userInput.toString().trim();
  testNumber(input);
};

process.stdin.on('data', playGame);

// We need to assign playGame() as the listener
//  callback function so that it’s invoked any time 
//  process.stdin emits a 'data' event.
