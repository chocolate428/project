function play_sound(id) {		document.getElementById(id).play();	}$(document).ready(function() {   $('.rock').click(function() {       console.log("rock")       userChoice = "ROCK"       play()              });      $('.paper').click(function() {       console.log("paper")       userChoice = "PAPER"       play()       });       $('.scissors').click(function() {    	console.log("scissors")    	userChoice = "SCISSORS"    	play()   }); });var getComChoice = function() {  var choice = Math.random();   var comChoice = "";  if (choice < 0.3) {  	console.log("rock");	comChoice = "rock";  }  else if (choice < 0.6) {	console.log("paper");	comChoice = "paper";  }  else {	console.log("scissors");	comChoice = "scissors";  }  return comChoice;};	var play = function() {	var comChoice = getComChoice();	var status = ""	if (userChoice === comChoice.toUpperCase()) {		alert("You both chose " + userChoice.toLowerCase() + "! Try again!");		status = "tie"	}	if (userChoice === "ROCK" && comChoice.toUpperCase() === "PAPER") {		alert("You chose rock and the computer chose paper! You lose!");		status = "lose"	}	if  (userChoice === "ROCK" && comChoice.toUpperCase() === "SCISSORS") {		alert("You chose rock and the computer chose scissors! You win!");		status = "win"	}	if (userChoice === "PAPER" && comChoice.toUpperCase() === "SCISSORS") {		alert("You chose paper and the computer chose scissors! You lose!");		status = "lose"	}	if (userChoice === "PAPER" && comChoice.toUpperCase() === "ROCK") {		alert("You chose paper and the computer chose rock! You win!");		status = "win"	}	if (userChoice === "SCISSORS" && comChoice.toUpperCase() === "ROCK") {		alert("You chose scissors and the computer chose rock! You lose!");		status = "lose"	}	if (userChoice === "SCISSORS" && comChoice.toUpperCase() === "PAPER") {		alert("You chose scissors and the computer chose paper! You win!");		status = "win"	}			if (status === "win") {		play_sound("Duck");	}	if (status === "tie") {		play_sound("Hawk");	}	if (status === "lose") {		play_sound("owl");	} 	};	