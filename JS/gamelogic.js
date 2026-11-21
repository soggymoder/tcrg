class Game {

	constructor
	(chosenSpeed, chosenDiff) 
	{
		this.menuScreen = document.querySelector(".menu-screen");
		this.gameScreen = document.querySelector(".game-screen");
		this.deathScreen = document.querySelector(".death-screen");

		this.HP = document.querySelector(".HP-val");
		this.time = document.querySelector(".time-val");
		this.score = document.querySelector(".score-val");
		this.combo = document.querySelector(".combo-val");

		this.currentHP = 0;
		this.currentTime = 0;
		this.currentScore = 0;
		this.currentCombo = 0;

		this.hp = chosenDiff;
		this.speed = 5 * chosenSpeed;
		
		this.currentCombo = 0;
		this.highestCombo = 0;

		this.notes = [];

		this.animationInterval = null;
	}	

	gameStart
	() 
	{
		this.menuScreen.style.display = "none";
		this.gameScreen.style.display = "flex";
	
		this.controlsListener();
		
		this.ball = new Player();	
		this.currentHP = this.hp;

		this.spawnNote();

		this.animationInterval = 
			setInterval(() => 
			{
				this.animate();
			}, 16);
	
		this.timer();

		this.HP.textContent = this.currentHP;
		this.time.textContent = this.currentTime;
		this.score.textContent = this.currentScore;
		this.combo.textContent = this.currentCombo;
	}

	timer
	()
	{
		this.timerThingy =
			setInterval(() =>
			{
				this.time.textContent++;
				this.currentTime++;
			}, 1000);

		if (this.currentHP === 0) {
			
			clearInterval(this.timerThingy);
		}
	}

	scoring // i already had this.score i didnt know what else to name this :sob:
	()
	{
		this.currentScore += 100;
		this.score.textContent = this.currentScore;
		
		// ought to make the logic for the bomb cog here too 
	}

	comboing
	()
	{			
		this.currentCombo += 1;
		this.combo.textContent = this.currentCombo;

		if (this.currentCombo > this.highestCombo) {
				
			this.highestCombo = this.currentCombo;
		}
	}

	comboBreaking
	()
	{
		if (this.currentCombo > this.highestCombo) {

			this.highestCombo = this.currentCombo;
		}

		this.currentCombo = 0;
		this.combo.textContent = this.currentCombo;
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
		this.notes.forEach((note, index) => {
			
			note.move();

			if (note.x + note.width < this.ball.x)
			{
				this.notes.splice(index, 1);                                                      
				note.note.remove();

				this.currentHP -= 1;
				this.HP.textContent = this.currentHP;

				this.comboBreaking();
			}
		});
	}

  controlsListener
	()
	{		
		addEventListener("keydown", (event) => {	
			
			this.noteHit = false;

			// today i found out that a forEach can have two parameters, neat!! :D
			this.notes.forEach((note, index) => {

				// slicing the first 5 characters to get rid of "Arrow" here xP
				this.keyPressed = event.key.slice(5, event.key.length).toLowerCase() === note.randomNote;

				if (this.keyPressed === true) {

					if (note.x < this.ball.x + this.ball.width && note.x + note.width > this.ball.x) {
						
						this.notes.splice(index, 1);
						note.note.remove();

						this.scoring();
						this.noteHit = true;
					}
				}
			});
			
			if (this.noteHit === true) {

				 this.comboing();
			 }

			else if (this.noteHit === false) {

				this.currentHP -= 1;
				this.HP.textContent = this.currentHP;

				this.comboBreaking();
			}
		});
	}
}
