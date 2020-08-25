let numGeneration = 6;
let colors = colorGeneration(numGeneration);

let targetColor =randomColor();
let squares = document.querySelectorAll(".squares");
let h1 = document.querySelector("h1");
let messageDisplay = document.querySelector("#messageDisplay");
let rgbDisplay = document.querySelector("#rgbDisplay");
let resetButton = document.querySelector("#reset");
// let modeButtons = document.querySelectorAll(".mode");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");

rgbDisplay.textContent = targetColor;

// for(let i = 0; i < modeButtons.length; i++) {
// 	modeButtons[i].addEventListener("click", function(){
// 		modeButtons[0].classList.remove("selected");
// 		modeButtons[1].classList.remove("selected");
// 		this.classList.add("selected");


// 	})
// }

easyButton.addEventListener("click", function(){
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	numGeneration = 3;
	colors = colorGeneration(numGeneration);
	targetColor = randomColor();
	rgbDisplay.textContent = targetColor;
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
	    	squares[i].style.backgroundColor = colors[i];
		}
		else {
    		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
});

hardButton.addEventListener("click", function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	numGeneration = 6;
	colors = colorGeneration(numGeneration);
	targetColor = randomColor();
	rgbDisplay.textContent = targetColor;
	for(let i = 0; i < squares.length; i++) {
    		squares[i].style.display = "block";
	    	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

resetButton.addEventListener("click", function(){
	reset();
}) ;

function reset() {
	colors = colorGeneration(numGeneration);
	targetColor = randomColor();
    rgbDisplay.textContent = targetColor;
    for(let i = 0; i < squares.length; i++) {
    	if(colors[i]){
		    squares[i].style.display = "block";
	    	squares[i].style.backgroundColor = colors[i];
    	}
    	else {
    		squares[i].style.display = "none";
    	}
    }
	h1.style.backgroundColor = "steelblue";
}

for( let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === targetColor) {
			messageDisplay.textContent = "Correct!";
			colorChange(targetColor);
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function randomColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function colorChange(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function colorGeneration(num) {
	let arr = [];
	for(let i = 0; i < num; i++) {
		let color = colorRandomGen();
		arr.push(color);
	}
	return arr;
}

function colorRandomGen() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}