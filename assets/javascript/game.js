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
    var wordBank = ['eagle', 'tiger', 'elephant', 'moose', 'parakeet', 'turtle'];
    var word = wordBank[Math.floor(Math.random() * wordBank.length)];
    var wordSplit = [];
    var wordHangman = [];
    var guessed = [];
    var guessesRemaining = 10;

    // Split the letters of the word up and add them to an array, and create array with letters hidden
    for (var i = 0; i < word.length; i++) {
        wordSplit.push(word[i])
        wordHangman.push("_")
    }

    // Presents the hidden word and guesses on the page
    document.querySelector("#word").innerHTML = wordHangman.join(" ");
    document.querySelector("#guessesRemaining").innerHTML = "Guesses remaining: " + guessesRemaining;
    document.querySelector("#guessed").innerHTML = guessed.join(" ");



    // Create function to detect keyboard input
    document.onkeyup = function () {
        // Store the player's input in a variable
        var letter = String.fromCharCode(event.which).toLowerCase();

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

        // If guessesRemaining reaches 0 and the word is not complete, the user loses
        if (wordSplit.toString() === wordHangman.toString()) {
            alert("You win!  Play again?")
            
        }
        else if (guessesRemaining < 1 && wordSplit.toString() != wordHangman.toString()) {
            console.log("word split: " + wordSplit)
            console.log("word Hangman: " + wordHangman)
            alert("You lose!  Play again?")
        } 







    }





})();