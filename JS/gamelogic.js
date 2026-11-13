class Game {

	constructor
	() 
	{
		this.menuScreen = document.querySelector(".menu-screen");
		this.gameScreen = document.querySelector(".game-screen");
		this.deathScreen = document.querySelector(".death-screen");

		this.HP = document.querySelector(".HP");
		this.time = document.querySelector(".time");
		this.score = document.querySelector(".score");
		this.combo = document.querySelector(".combo");

		this.currentHP = null;
		this.currentTime = null;
		this.currentScore = null;
		this.currentCombo = null;

		// I'll work on the game more properly tomorrow, see if i implement the player and cogs logic xP
	}	

	gameStart
	() 
	{
		this.menuScreen.style.display = "none";
		this.gameScreen.style.display = "flex";
		
		this.HP.textContent = this.currentHP;
		this.time.textContent = this.currentTime;
		this.score.textContent = this.currentScore;
		this.combo.textContent = this.currentCombo;

		// Same here and everything that i shall add tomorrow below xP
	}
}
