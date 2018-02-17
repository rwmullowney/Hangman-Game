(function () {
    // logic here
    // Good example of doing an .innerHTML
    // var score = "this is a score";
    // document.querySelector("#test").innerHTML = score;
    // document.querySelector("#test").innerHTML = "good example of this";
    // document.querySelector("#test").innerText = "is it tho";

    // var testArray = ['this', 'is', 'a', 'test'];

    // document.querySelector("#test").innerHTML = testArray.join(" ");


    // Establish variables


    function initGame() {
        wordBank = ['mario', 'pikachu', 'bowser', 'ganondorf', 'pikmin', 'dedede'];
        word = wordBank[Math.floor(Math.random() * wordBank.length)];
        wordSplit = [];
        wordHangman = [];
        guessed = [];
        guessesRemaining = 10;

        // Split the letters of the word up and add them to an array, and create array with letters hidden
        for (var i = 0; i < word.length; i++) {
            wordSplit.push(word[i])
            wordHangman.push("_")
        }
        document.querySelector("#word").innerHTML = wordHangman.join(" ");
        document.querySelector("#guessesRemaining").innerHTML = "Guesses remaining: " + guessesRemaining;
        document.querySelector("#guessed").innerHTML = guessed.join(" ");
        document.querySelector("#gameResult").innerHTML = "";
    }

    function playGame() {
        // Create function to detect keyboard input
        document.onkeyup = function () {

            // Store the player's input in a variable, and store the keycode for that input in a variable too
            var letter = String.fromCharCode(event.which).toLowerCase();
            var keyCode = (event.keyCode ? event.keyCode : event.which);
            if (guessesRemaining > 0 && wordSplit.toString() != wordHangman.toString()) {
                // Add the letter to the guessed list if it isn't already guessed
                if (guessed.indexOf(letter) < 0) {
                    guessed.push(letter)
                    document.querySelector("#guessed").innerHTML = guessed.join(", ");

                    // Deduct guess from guessesRemaining only if it isn't a correct guess
                    if (wordSplit.indexOf(letter) < 0) {
                        document.querySelector("#guessesRemaining").innerHTML = "Guesses remaining: " + --guessesRemaining;
                    }
                }

                // Check whether player input is in word
                for (var i = 0; i < wordSplit.length; i++) {
                    // If so, replace the hidden letter with the shown one
                    if (letter === wordSplit[i]) {
                        wordHangman[i] = letter
                        document.querySelector("#word").innerHTML = wordHangman.join(" ");
                    }
                }

                // Determine and display whether the player wins or loses
                // Player wins
                if (wordSplit.toString() === wordHangman.toString()) {
                    window.setTimeout(function () {
                        document.querySelector("#gameResult").innerHTML = "You win!  Press 'enter' to play again";
                        // document.getElementById('myAudio').play();
                    }, 1);
                // Player loses
                } else if (guessesRemaining < 1 && wordSplit.toString() != wordHangman.toString()) {
                    document.querySelector("#gameResult").innerHTML = "You lose!  Press 'enter' to play again";
                }

                // Reset the game when the player presses enter after winning/losing
            } else {
                if (keyCode === 13) {
                    initGame()
                }
            }
        }
    }

// Play sound effects upon winning or losing



initGame()
playGame()



})();