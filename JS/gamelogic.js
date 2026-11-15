class Game {

	constructor
	(chosenSpeed) 
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
	
		this.speed = chosenSpeed;
	}	

	gameStart
	() 
	{
		this.menuScreen.style.display = "none";
		this.gameScreen.style.display = "flex";

		this.note = new Note();
		this.ball = new Player();

		this.HP.textContent = this.currentHP;
		this.time.textContent = this.currentTime;
		this.score.textContent = this.currentScore;
		this.combo.textContent = this.currentCombo;
	}
}
