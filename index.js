var inquirer = require("inquirer");

var word = require("./word.js");

var words = ["Mario", "Donkey Kong", "Link", "Samus", "Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff", "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth"];
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
				console.log("ANSWER:");
				console.log(current_word.word);
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
