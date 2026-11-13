// still not very sure about how to organise the files for this project but i suppose i'll dump most stuff in here for the time being until it begins getting too overwhelming or i notice i should probably split stuff xP

const startingScreen = document.querySelector(".starting-screen");
const menuScreen = document.querySelector(".menu-screen");
const gameScreen = document.querySelector(".game-screen");
const deathScreen = document.querySelector(".death-screen");

const startBtn = document.querySelector(".start-btn");
const quitBtn = document.querySelector(".quit-btn");

const startGameBtn = document.querySelector(".start-game-btn");
const returnToStartBtn = document.querySelector(".return-start-btn");

// im so joy and whimsy pilled !! i love my vibeo jame !!
let menuVibeoJame;
let gameVibeoJame;

window.addEventListener("load", () => {

	startBtn.addEventListener("click", () => {

		menuVibeoJame = new Menu();
		menuVibeoJame.goToMenu();
	});

	startGameBtn.addEventListener("click", () => {
		
		gameVibeoJame = new Game();
		gameVibeoJame.gameStart();
	});

	returnToStartBtn.addEventListener("click", () => {
		
		menuVibeoJame.returnToStart();
	});

	// ill think of the death logic later, game isnt even playable yet so xP

	// ought to put the keybinds for the game here when i get to the actual game logic xP
});

