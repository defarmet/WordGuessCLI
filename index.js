var inquirer = require("inquirer");

var word = require("./word.js");

var words = ["Test", "Hello there"];
var current_word;
var index = -1;
var guesses = 10;
var guess_prompt = {
	type: "input",
	name: "letter",
	message: "GUESS A LETTER",
}

function guess(response)
{
	if (response.letter.length > 0) {
		if(!current_word.check(response.letter[0])) {
			guesses--;
			console.log(guesses + " GUESSES REMAINING");
			if (guesses === 0) {
				console.log("YOU LOSE");
				return;
			}
		}
	}

	console.log(current_word.display());
	if (current_word.solved()) {
		console.log("WORD GUESSED!");
		next_word();
		return;
	}

	inquirer.prompt(guess_prompt).then(guess);
}

function next_word()
{
	index++;
	if (index >= words.length) {
		console.log("YOU WIN");
		return;
	}

	guesses = 10;
	current_word = new word(words[index]);
	console.log(current_word.display());
	inquirer.prompt(guess_prompt).then(guess);
}

function shuffle()
{
	for (var i = words.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var x = words[i];
		words[i] = words[j];
		words[j] = x;
	}
}

shuffle();
next_word();
