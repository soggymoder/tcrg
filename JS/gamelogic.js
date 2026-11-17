class Game {

	constructor
	(chosenSpeed) 
	{
		this.menuScreen = document.querySelector(".menu-screen");
		this.gameScreen = document.querySelector(".game-screen");
		this.deathScreen = document.querySelector(".death-screen");

		this.HP = document.querySelector(".HP-val");
		this.time = document.querySelector(".time-val");
		this.score = document.querySelector(".score-val");
		this.combo = document.querySelector(".combo-val");

		this.currentHP = null;
		this.currentTime = null;
		this.currentScore = null;
		this.currentCombo = null;
	
		this.speed = 5 * chosenSpeed;
		
		this.notes = [];

		this.animationInterval = null;
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
		
		this.ball = new Player();	
		
		this.spawnNote();

		this.animationInterval = 
			setInterval(() => 
			{
				this.animate();
			}, 16);
	}

	spawnNote
	()
	{
		this.spawnTimer = Math.random() * (1000 - 500) + 500;

		this.goMyNotes =
			setTimeout(() =>
				{
					this.notes.push(new Note(this.speed)); // oh how i (dont) love OOP

					this.spawnNote();
				}, this.spawnTimer);
	}

	animate
	()
	{
		this.notes.forEach((note) =>
		{
			note.move();
		});
	}
}
