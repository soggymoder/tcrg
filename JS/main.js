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

const menuTon = document.querySelector(".menu-screen-ton img");

// Sfx wowie
const clickingSfx = new Audio("Assets/Sfx/click.mp3");
const tonBahhhSfx = new Audio("Assets/Sfx/tonbahhh.mp3");

// Highscore
const highScore = document.querySelector(".high-score-val");
let highScoreValue = localStorage.getItem("highScore") || 0;

highScore.textContent = highScoreValue;

function saveScore
(score)
{
	if (score > highScoreValue) {

		highScoreValue = score;
		localStorage.setItem("highScore", highScoreValue);
	}

	highScore.textContent = highScoreValue;
}

// Stuff for the event listeners
let menuVibeoJame;
let gameVibeoJame;

// Event listener thingamabobs and whatnot
document.addEventListener("click", () => {

	clickingSfx.currentTime = 0;
	clickingSfx.play();
});

window.addEventListener("load", () => {

	// Buttons and what not
	startBtn.addEventListener("click", () => {

		menuVibeoJame = new Menu();
		menuVibeoJame.goToMenu();
	});

	menuTon.addEventListener("click", () => {
		
		window.open("https://github.com/soggymoder/tcrg/blob/master/README.md/#how-do-i-play-the-game", "_blank"); // thank you once again SO for existing and being helpful
	});

	menuTon.addEventListener("contextmenu", (event) => {

		event.preventDefault();

		tonBahhhSfx.play();
		menuTon.src = "Assets/Imgs/Menus/menutonbahhh.png";

		setTimeout(() => {
			menuTon.src = "Assets/Imgs/Menus/menuton.png";
		}, 1500);
	});

	startGameBtn.addEventListener("click", () => {
		
		gameVibeoJame = new Game(parseFloat(menuVibeoJame.chosenSpeed), parseFloat(menuVibeoJame.chosenDiff), saveScore); // thank you SO thread from 17 years ago for the tip on how to parse a string into an integer :D
		gameVibeoJame.gameStart();
	});

	returnToStartBtn.addEventListener("click", () => {
		
		menuVibeoJame.returnToStart();
	});

	restartGameBtn.addEventListener("click", () => {
		
		gameVibeoJame = new Game(parseFloat(menuVibeoJame.chosenSpeed), parseFloat(menuVibeoJame.chosenDiff), saveScore);
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

