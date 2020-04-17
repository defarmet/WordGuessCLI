var letter = require("./letter.js");

function create(word)
{
	var letters = [];
	for (var i = 0; i < word.length; i++) {
		letters.push(new letter(word[i]));
	}

	return letters;
}

function display()
{
	var output = "";
	for (var i = 0; i < this.letters.length; i++) {
		output += this.letters[i].display() + ' ';
	}

	return output;
}

function check(letter)
{
	var correct = false;
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].check(letter)) {
			correct = true;
		}
	}

	return correct;
}

function solved()
{
	for (var i = 0; i < this.letters.length; i++) {
		if (!this.letters[i].guessed) {
			return false;
		}
	}

	return true;
}

module.exports = function(word)
{
	this.letters = create(word);
	this.display = display;
	this.check = check;
	this.solved = solved;
}
