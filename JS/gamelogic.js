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
		
		this.controlsListener();

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
			setTimeout(() => {

				this.notes.push(new Note(this.speed));

				this.spawnNote();
			}, this.spawnTimer);
	}

	animate
	()
	{
		this.notes.forEach((note) => {
			
			note.move();
		});
	}

	// i CANNOT wait for when i have the time to clean out all files and sort everything out because this whole section below is an eyesore for me to read right now but blehh we ball

	controlsListener
	()
	{		
		addEventListener("keydown", (event) => {	
			/* 
				 today i found out that a forEach can have two parameters, neat!! :D

				 i have noticed that some times when i press the right arrow here it will just delete two notes at once.. 
			   im not 100% sure why but it only happened twice in 30 presses so i think ill keep it for now and look into this again post MVP ;w;
			*/
			this.notes.forEach((note, index) => {

				this.keyPressed = event.key.slice(5, event.key.length).toLowerCase() === note.randomNote;
				console.log(note, index);

				if (this.keyPressed === true) {
					
					if (note.x < this.ball.x + this.ball.width && note.x + note.width > this.ball.x) { // this a P.I.T.A to visualize BUT IT WORKS THATS WHAT MATTERS RIGHT??????????????!?!?

						this.notes.splice(index, 1);
						note.note.remove();
					}
				}
			});
		});
	}
}
