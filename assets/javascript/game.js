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
    var word = wordBank[Math.floor(Math.random()*wordBank.length)];
    var wordSplit = [];
    var wordHangman = [];
    
    // Split the letters of the word up and add them to an array, and create array with letters hidden
    for (var i = 0; i < word.length; i++) {
        wordSplit.push(word[i])
        wordHangman.push("_")
    }
    document.querySelector("#test").innerHTML = wordHangman.join(" ");
    
})();