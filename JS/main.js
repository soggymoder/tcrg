// Screens

const startingScreen = document.querySelector(".starting-screen");
const menuScreen = document.querySelector(".menu-screen");
const gameScreen = document.querySelector(".game-screen");
const deathScreen = document.querySelector(".death-screen");

// Buttons

const startBtn = document.querySelector(".start-btn");
const quitBtn = document.querySelector(".quit-btn");

const startGameBtn = document.querySelector(".start-game-btn");
const returnToStartBtn = document.querySelector(".return-start-btn");

const restartGameBtn = document.querySelector(".restart-game-btn");
const returnToMenuBtn = document.querySelector(".return-menu-btn");

// Clickable UI stuff

const speed = document.querySelectorAll(".speed-opt");
const diff = document.querySelectorAll(".diff-opt");

// Stuff for the event listeners

let menuVibeoJame;
let gameVibeoJame;

// Event listener thingamabobs and whatnot

window.addEventListener("load", () => {

	// Buttons and what not

	startBtn.addEventListener("click", () => {

		menuVibeoJame = new Menu();
		menuVibeoJame.goToMenu();
	});

	startGameBtn.addEventListener("click", () => {
		
		gameVibeoJame = new Game(parseFloat(menuVibeoJame.chosenSpeed), parseFloat(menuVibeoJame.chosenDiff)); // thank you SO thread from 17 years ago for the tip on how to parse a string into an integer :D
		gameVibeoJame.gameStart();
	});

	returnToStartBtn.addEventListener("click", () => {
		
		menuVibeoJame.returnToStart();
	});

	restartGameBtn.addEventListener("click", () => {
		
		gameVibeoJame = new Game(parseFloat(menuVibeoJame.chosenSpeed), parseFloat(menuVibeoJame.chosenDiff));
		gameVibeoJame.gameStart();
	});

	returnToMenuBtn.addEventListener("click", () => {
		
		menuVibeoJame.returnToMenu();
	});

	// Clickable UI stuff (idk what to call these but i think this is a good enough descriptor
	
	speed.forEach((speedOptions) => {

		speedOptions.addEventListener("click", () => {

			console.log("picked one of the speed options test test bing bong ding dong");
		
			menuVibeoJame.chosenSpeed = speedOptions.textContent;
		});
	});
	
	diff.forEach((diffOptions) => {
		 
		diffOptions.addEventListener("click", () => {                                                            
				
			console.log("picked one of the speed options test test bing bong ding dong");

			menuVibeoJame.chosenDiff = diffOptions.textContent;
		});                                                         
	});
});

