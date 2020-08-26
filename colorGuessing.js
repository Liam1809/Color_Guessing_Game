let numGeneration = 6;
let colors = [];
let targetColor;

let squares = document.querySelectorAll(".squares");
let h1 = document.querySelector("h1");
let messageDisplay = document.getElementById("messageDisplay");
let rgbDisplay = document.querySelector("#rgbDisplay");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

// init
init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

// add click listener to resetButton
resetButton.addEventListener("click", function(){
	reset();
}) ;

function setupModeButtons() {
	for(let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			// handle alternative style click buttons
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// initial numGeneration
			this.textContent === "Easy" ? numGeneration = 3 : numGeneration = 6;
			// reset
			reset();
		});
	}
}

function setupSquares() {
	for( let i = 0; i < squares.length; i++) {
		// add click listener to square
		squares[i].addEventListener("click", function(){
			// grab color of cliked square
			let pickedColor = this.style.backgroundColor;
			// compare color to targetColor
			if(pickedColor === targetColor) {
				messageDisplay.textContent = "Correct!";
				colorChange(targetColor);
			}
			else{
				// fade square away
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	// generate a list of colors by a given number and assign to colors
	colors = colorGeneration(numGeneration);
	// pick new target color
	targetColor = randomColor();
	// change rgbDisplay to match given color
    rgbDisplay.textContent = targetColor;
    // change color of squares
    for(let i = 0; i < squares.length; i++) {
    	if(colors[i]){
		    squares[i].style.display = "block";
	    	squares[i].style.backgroundColor = colors[i];
    	}
    	else {
    		squares[i].style.display = "none";
    	}
    }
    //  change color of h1 to match given color
	h1.style.backgroundColor = "steelblue";
	// reset messageDisplay
	messageDisplay.textContent = "";
}


function randomColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function colorChange(color) {
	// loop through all squares
	for(let i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	// also change h1 to that color
	h1.style.backgroundColor = color;
}

function colorGeneration(num) {
	// emty array
	let arr = [];
	for(let i = 0; i < num; i++) {
		// get random color and push to array
		let color = colorRandomGen();
		arr.push(color);
	}
	// return array
	return arr;
}

function colorRandomGen() {
	// pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	let g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}