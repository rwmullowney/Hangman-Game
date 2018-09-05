(function () {
    // logic here
    // Good example of doing an .innerHTML
    // var score = "this is a score";
    // document.querySelector("#test").innerHTML = score;
    // document.querySelector("#test").innerHTML = "good example of this";
    // document.querySelector("#test").innerText = "is it tho";

    // var testArray = ['this', 'is', 'a', 'test'];

    // document.querySelector("#test").innerHTML = testArray.join(" ");

    // Establish wins - need to be exclusive from initGame
    let wins = 0
    let wordBank = ['mario', 'pikachu', 'bowser', 'zelda', 'dedede'];

    document.querySelector("#wins").innerHTML = "Wins: " + wins;


    function initGame() {
        randNum = Math.floor(Math.random() * wordBank.length)
        word = wordBank[randNum];
        wordSplit = [];
        wordHangman = [];
        guessed = [];
        guessesRemaining = 10;

        // Remove the chosen word from the array
        wordBank.splice(randNum, 1)

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
        // Initialize the game
        initGame();

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
                        if (wordBank.length === 0) {
                            document.querySelector("#gameResult").innerHTML = "You win!";
                            document.querySelector("#wins").innerHTML = "Wins: " + ++wins;
                            document.querySelector("#infoImage").innerHTML = `<h2>You've completed the game!</h2>`;
                            document.querySelector("#infoText").innerHTML = "<p>Please refresh the page to play again.</p>";
                            return
                        }
                        document.querySelector("#gameResult").innerHTML = "You win!  Press 'enter' to play again";
                        // document.getElementById('myAudio').play();
                        document.querySelector("#wins").innerHTML = "Wins: " + ++wins;
                        infoSwitch();
                    }, 1);
                    // Player loses
                } else if (guessesRemaining < 1 && wordSplit.toString() != wordHangman.toString()) {
                    document.querySelector("#gameResult").innerHTML = "You lose!  The word was '" + word + "'. \n Press 'enter' to play again";
                    infoSwitch();
                }

                // Reset the game when the player presses enter after winning/losing
            } else {
                if (keyCode === 13 && wordBank.length > 0) {
                    initGame();
                }
            }
        }
    }

    function infoSwitch() {
        if (word === 'mario') {
            document.querySelector("#infoImage").innerHTML = '<img class="img-fluid nintendo" src="assets/images/mario.png" alt="Mario jumping">';
            document.querySelector("#infoText").innerHTML = "<p>Mario is the hero of the legendary 'Mario' series.  First introduced on the NES in 1985, Mario became a cultural icon and is now one of the most recognizable characters in the world.</p>";
        }
        if (word === 'zelda') {
            document.querySelector("#infoImage").innerHTML = '<img class="img-fluid nintendo" src="assets/images/zelda.png" alt="Princess Zelda holding a sword">';
            document.querySelector("#infoText").innerHTML = "<p>Princess Zelda plays the hero's counterpart in the Legend of Zelda series.  Following the first release in 1986, the series has consistenly produced games that are some of the most highly regarded in the industry.</p>";
        }
        if (word === 'pikachu') {
            document.querySelector("#infoImage").innerHTML = '<img class="img-fluid nintendo" src="assets/images/pikachu.png" alt="Pikachu sitting">';
            document.querySelector("#infoText").innerHTML = "<p>Pikachu was one of the primary charaters of the massively successful Pokemon TV show.  It began as a video game for the Game Boy, and as of today the series has sold more than 300 million copies.</p>";
        }
        if (word === 'bowser') {
            document.querySelector("#infoImage").innerHTML = '<img class="img-fluid nintendo" src="assets/images/bowser.png" alt="Bowser in an aggressive stance">';
            document.querySelector("#infoText").innerHTML = "<p>Bowser is the primary antagonist of the Mario series.  The standard plot involves him capturing a princess, and Mario coming to the rescue.</p>";
        }
        if (word === 'dedede') {
            document.querySelector("#infoImage").innerHTML = '<img class="img-fluid nintendo" src="assets/images/dedede.png" alt="King Dedede holding a large mallet">';
            document.querySelector("#infoText").innerHTML = "<p>King Dedede is the main antagonist of the Kirby series.  He's really just here because it's fun to have a 2-letter hangman game.</p>";
        }
        // if (word === 'pikmin'){
        //     document.querySelector("#infoImage").innerHTML = '<img class="img-fluid nintendo" src="assets/images/pikmin.png" alt="A photo of Pikachu sitting">';
        //     document.querySelector("#infoText").innerHTML = "<p>With the massively successful Pokemon Red & Blue, Pikachu became a gaming sensation beloved by children everywhere.</p>";
        // }
    }

    // Play sound effects upon winning or losing



    playGame()



})();