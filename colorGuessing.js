let colors = generationColor(6);

let squares = document.querySelectorAll(".square");
let rgbDisplay = document.getElementById("rgbDisplay");
let targetColor = randomColor();
let messageDisplay = document.getElementById("messageDisplay");

rgbDisplay.textContent = targetColor;

for(let i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to targetColor
		if(clickedColor === targetColor) {
			messageDisplay.textContent = "Correct";
			colorChange(targetColor);
		}
		else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
		}
	});
}

function colorChange(color) {
	// loop through all squares
	for(let i = 0; i < squares.length; i++) {
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
		let red = Math.floor(Math.random()*251);
		let green = Math.floor(Math.random()*251);
		let blue = Math.floor(Math.random()*251);
		arr.push(color);
	}
	return arr;
}