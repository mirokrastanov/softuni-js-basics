function guessTheNumber() {

    // Create an Interface for Input & Output
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Generate a random number to be guessed by the User
    let computerGuess = Math.floor((Math.random() * 100) + 1);

    // This function (1)obtains an input from the user, (2)compares it with the one generated by the computer and (3)outputs different responses depending on the user's input.
    let callNewGuess = function () {
        readline.question('Guess the number (0-100): ', (userInput) => {
            if (userInput.trim() != Number(userInput.trim())) {
                console.log(`\x1b[33m Your input --> ${userInput} --> is not a number! Please type a number! \x1b[0m`);
                // Using recursion below in order to prompt the user over and over
                callNewGuess();
            } else if (userInput.trim() == computerGuess) {
                console.log(`\n\x1b[96m-------------------------------------------------\x1b[0m`);
                console.log(`\x1b[96m Correct!!! You guessed the number --> ${userInput} <-- \x1b[0m`);
                console.log(`\x1b[96m-------------------------------------------------\x1b[0m`);
                readline.close();
            } else if (userInput.trim() > computerGuess) {
                console.log(`\x1b[31m Your answer --> ${userInput} --> is too High! Try again! \x1b[0m`);
                // Using recursion below in order to prompt the user over and over
                callNewGuess();
            } else if (userInput.trim() < computerGuess) {
                if (!userInput) {
                    console.log(`\x1b[33m You\'ve submitted an empty input! Please type a number! \x1b[0m`);
                } else {
                    console.log(`\x1b[32m Your answer --> ${userInput} --> is too low! Try again! \x1b[0m`);
                }
                // Using recursion below in order to prompt the user over and over
                callNewGuess();
            }
        });
    };

    // Prompt the user to guess the number - Invokes the call function, determines outcome & prints result.
    callNewGuess();

    // Listener for the close event. Upon close the following is executed. Both on forced close via command and on expected close due to game ending after the number has been guessed by the user.
    readline.on('close', () => {
        console.log(`\n\x1b[35m Thank You for playing "Guess the Number" by @mirokrastanov !\n --> https://github.com/mirokrastanov \x1b[0m\n`);
    });

}

guessTheNumber();