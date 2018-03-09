const numberOfGuesses = 13;
const validInputChoices = ['a','b','c','d','e','f','g','h','i','j','k',
'l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numLeadingScoreZeros = 5;

var userWins = 0;
var userLosses = 0;
var userGuessesLeft = numberOfGuesses;
var userGuesses = [];
var userInputArray = [];

function playSound(source){
	var audio = new Audio(source);
	audio.play()
}
function setUpMusic(){
	var player = document.getElementById("bgMusic");
	player.volume = .2;
	player.loop = true;
	player.autoplay = true;
}

function updateHealth(){
	//console.log(document.getElementById("life-bar"));

	var healthPercent = userGuessesLeft/numberOfGuesses*100;
	if(userGuessesLeft < 3){
		document.getElementById("life-bar-container").classList.add("criticalAnimate");
	}else{
		document.getElementById("life-bar-container").classList.remove("criticalAnimate");
	}

	var lifeBarDiv = document.getElementById("life-bar");

	lifeBarDiv.setAttribute("aria-valuenow", healthPercent);
	var percentStr = healthPercent + "%";

	console.log("Health = " + percentStr);
	lifeBarDiv.style.width = percentStr;

}
function addZeros(score){
	var scoreStr = "";
	for(i=0;i<(numLeadingScoreZeros -(Math.floor(score/1000)));i++){
		scoreStr = scoreStr + "0";
	}
	scoreStr = scoreStr + score;
	return scoreStr;


}
function getGuessString(){
	var returnStr = "";
	for(i=0;i<userGuesses.length;i++){
		returnStr = returnStr + userGuesses[i] + " ";
	}
return returnStr;
}
function updateScreen(question){
	
	
	var winStr =  addZeros(userWins);
	var lossStr = addZeros(userLosses);
	document.getElementById("userWins").textContent = winStr;
	document.getElementById("userLosses").textContent = lossStr;
	updateHealth();
	document.getElementById("questionStr").textContent = question.question;
	displayAnswerStr(question);
	document.getElementById("guessStr").textContent = getGuessString();
	document.getElementById("bar-text").textContent = "Life: " + userGuessesLeft + " Guesses Left"; 
	

}
function generateQuestion(){
	var question = questionArray[Math.floor(Math.random()*questionArray.length)];
	console.log(question.answer);
	// if(question.displayed){
	// 	generateQuestion();
	// }
	return question;
}
function displayAnswerStr(question){
	var displayStr = question.getAnswerStr(userInputArray);
	document.getElementById("answerStr").textContent = displayStr;

}
function resetGame(){
	userGuesses = [];
	userInputArray = [];
	userGuessesLeft = numberOfGuesses;
	trivia = generateQuestion();
}
function win(){
	playSound("assets/media/126422__cabeeno-rossley__level-up.wav");
	//play sound
	userWins++;
	trivia.setUsed();
	resetGame();
}
function lose(){
	//play sound
	playSound("assets/media/126415__cabeeno-rossley__enemy-emerge.wav");
	userLosses++;
	resetGame();
}
setUpMusic();
 var trivia = generateQuestion();
//generateQuestion(trivia);
console.log(trivia.answer);
updateScreen(trivia);


document.onkeyup = function(event){

	var userGuess = event.key;
	console.log("in press " + event.key);
		//code block to check if input is alphabetical 
		// var a = 'a'; 
		// var z = 'z'; // ascii code for 'z'
		// var alpha = a.charCodeAt(0); //ascii code for 'a' 
		// var omega = z.charCodeAt(0); //ascii code for 'z'
		//if the letter 
		// if(userGuess.charCodeAt(i) >= alpha && 
		// 		userGuess.charCodeAt(i) <= omega){
		var validInput = false;
		for(i=0;i<validInputChoices.length;i++){
			if(userGuess === validInputChoices[i]){
				validInput = true;
			}
		}
if(validInput){
		var newCharacter = true;
		for(i=0;i<userInputArray.length;i++){
			if(userGuess === userInputArray[i]){
				newCharacter = false;
			}
		}

		if(newCharacter){
		userInputArray.push(userGuess);
		var found = false;
		for(i=0;i<trivia.answer.length;i++){
			
			if(userGuess === trivia.answer[i].toLowerCase()){
					//play sound
			found = true;
			playSound("assets/media/126413__cabeeno-rossley__collect-special-coin.wav");
			trivia.lettersSolved++;

			if(trivia.lettersSolved === trivia.lettersToSolve){
				win();				
			}// check win end
		}//match found end
				}// loop to find match end
				if(!found){

					document.getElementById("life-bar-container").classList.add("hitAnimate");
					playSound("assets/media/126423__cabeeno-rossley__shoot-laser.wav");
					userGuesses.push(userGuess);
					userGuessesLeft--;
					setTimeout(function(){
						document.getElementById("life-bar-container").classList.remove("hitAnimate")},500);
					if(userGuessesLeft < 1){
						lose();
					}
									
				}// no match found end
		}// new character end
	
 }//alphabet check end
// else{
// 	console.error("invalid key" + userGuess);
// }
updateScreen(trivia);
console.log("out of press " + event.key)
}

//updateScreen(trivia);
