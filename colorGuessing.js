let colors = generationColor(6);
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let rgbDisplay = document.getElementById("rgbDisplay");
let targetColor = randomColor();
let messageDisplay = document.getElementById("messageDisplay");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");
rgbDisplay.textContent = targetColor;

resetButton.addEventListener("click", function(){
	this.textContent = "New Color";
	colors = generationColor(6);
	targetColor = randomColor();
	rgbDisplay.textContent = targetColor;
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});

easyButton.addEventListener("click", function(){
	colors = generationColor(3);
	targetColor = randomColor();
	rgbDisplay.textContent = targetColor;

	for(let i = 0; i < squares.length; i++) {
		if(i < squares.length/2){
		squares[i].style.backgroundColor = colors[i];
		}
		else {
		squares[i].style.backgroundColor = "#232323";
		}
	}
	h1.style.backgroundColor = "#232323";
});

hardButton.addEventListener("click", function()){
	
}
for(let i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to targetColor
		if(clickedColor === targetColor) {
			messageDisplay.textContent = "Correct!";
			colorChange(targetColor);
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = targetColor;
		}
		else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
		}
	});
}

function colorChange(color) {
	// loop through all squares
	for(let i = 0; i < colors.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	} 
}

function randomColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generationColor(num) {
	let arr = [];
	for(let i = 0; i < num ; i++) {
		let color = randomColorGen();
		arr.push(color);
	}
	return arr;
}

function randomColorGen() {
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}