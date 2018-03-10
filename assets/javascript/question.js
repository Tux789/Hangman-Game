function triviaQuestion(question, answer) {
	this.question = question;
	this.answer= answer;
	this.displayed= false;
	this.lettersToSolve = calcLettersToSolve(this);
	this.lettersSolved = 0;
	this.getBlankStr = function(){
		var returnStr = "";
		for(i=0;i<this.answer.length;i++){
			returnStr = returnStr + "_";
		}
		return returnStr;
	};
	this.getAnswerStr = function(guesses){
		var a = 'a';
		var z = 'z';
		var alpha = a.charCodeAt(0);
		var omega = z.charCodeAt(0);
		var returnStr = "";
		var found = false;
		for(i=0;i<this.answer.length;i++){
			if(this.answer.toLowerCase().charCodeAt(i) >= alpha && 
				this.answer.toLowerCase().charCodeAt(i) <= omega){
			found = false;
			for(j=0;j<guesses.length;j++){
				if(this.answer[i].toLowerCase() === guesses[j]){
					returnStr = returnStr + this.answer[i]+" ";
					found = true;
				}

				}
				if(!found){
					returnStr = returnStr + "_ ";
				}
								
		} else{
			returnStr = returnStr + this.answer[i] + " ";
			console.log(this.answer.charCodeAt(i));
		}
			
		}
		return returnStr;
	};
	this.setUsed = function(){
		this.displayed = true;
	}

};
function calcLettersToSolve(question){
	var numLettersToSolve = 0;
	var a = 'a'; 
	var z = 'z'; 
	var alpha = a.charCodeAt(0); //ascii code for 'a' 
	var omega = z.charCodeAt(0); //ascii code for 'z'
		for(i=0;i<question.answer.length;i++){
		if(question.answer.toLowerCase().charCodeAt(i) >= alpha && 
				question.answer.charCodeAt(i) <= omega){
				numLettersToSolve++;
		}
	}
	console.log(question.answer + " " + question.answer.length+" "+ numLettersToSolve);
	return numLettersToSolve;
}

questionArray = [];
//var element =  new triviaQuestion("Maker of Mario","Shigeru Miyamoto");

questionArray.push(new triviaQuestion("Person who created Mario?","Shigeru Miyamoto"));
questionArray.push(new triviaQuestion("Player Character in Legend of Zelda?","Link"));
questionArray.push(new triviaQuestion("The tenth game in the  \"Assassin's Creed\" series?","Origins"));
questionArray.push(new triviaQuestion("Game series set in an underwater city named \"Rapture\"?","Bioshock"));
questionArray.push(new triviaQuestion("A former colleague of Falco's, Katt Monroe is a character from which video game series?","Star Fox"));
questionArray.push(new triviaQuestion("What 1984 NES game was themed around motocross racing?","Excitebike"));
questionArray.push(new triviaQuestion("Finish the title: \"Spyro the...\"?","Dragon"));
questionArray.push(new triviaQuestion("You can play as Toad, Peach, and Koopa in what series of games known for being played on boards and with mini-games, stars, dice, and coins?","Mario Party"));
questionArray.push(new triviaQuestion("I'm amphibious / And I like to leap and hop / Between cars and trucks. What game am I?","Frogger"));
questionArray.push(new triviaQuestion("What 1984 game created by British designer Sandy White for the ZX Spectrum platform is considered the first video game to feature zombies?","Zombie Zombie"));
questionArray.push(new triviaQuestion("In which action-adventure video game would you find the characters of Jacqueline Natla, Larson Conway and Pierre DuPont?","Tomb Raider"));
questionArray.push(new triviaQuestion("What Russian puzzle game makes you follow the colored blocks and slide them into the right place?","Tetris"));
questionArray.push(new triviaQuestion("\"New Leaf\" was the subtitle for a game in what popular Nintendo simulation series?","Animal Crossing"));
questionArray.push(new triviaQuestion("What fighting game series had characters such as: Scorpion, Sub Zero, and Raiden?","Mortal Kombat"));
questionArray.push(new triviaQuestion("Gabriel Belmont, grandfather of Simon, gets to ride giant spiders during the Middle Ages in a bid to defeat the Lords of Shadow in what series?","Castlevania"));