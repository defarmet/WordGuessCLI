function display()
{
	if (this.guessed) {
		return this.letter;
	}

	return '_';
}

function check(letter)
{
	if (letter.toUpperCase() === this.letter.toUpperCase()) {
		this.guessed = true;
		return true;
	}

	return false;
}

module.exports = function(letter)
{
	this.letter = letter;
	switch (letter) {
	case ' ':
	case '-':
	case '.':
	case '&':
		this.guessed = true;
		break;

	default:
		this.guessed = false;
	}
	this.display = display;
	this.check = check;
}
