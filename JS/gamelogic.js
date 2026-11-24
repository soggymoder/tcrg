class Game {

	constructor
	(chosenSpeed, chosenDiff, saveScore) 
	{
		this.menuScreen = document.querySelector(".menu-screen");
		this.gameScreen = document.querySelector(".game-screen");
		this.deathScreen = document.querySelector(".death-screen");

		this.HP = document.querySelector(".HP-val");
		this.time = document.querySelector(".time-val");
		this.score = document.querySelector(".score-val");
		this.combo = document.querySelector(".combo-val");
		this.dsScore = document.querySelector(".ds-score-val");
		this.dsHCombo = document.querySelector(".ds-hcombo-val");

		this.currentHP = 0;
		this.currentTime = 0;
		this.currentScore = 0;
		this.currentCombo = 0;
		this.highestCombo = 0;

		this.hp = chosenDiff;
		this.speed = 5 * chosenSpeed;

		this.scoreSaver = saveScore;

		this.notes = [];

		this.animationInterval = null;
	}	

	gameStart
	() 
	{
		this.menuScreen.style.display = "none";
		this.gameScreen.style.display = "flex";
		this.deathScreen.style.display = "none";
	
		this.controlsListener();
		
		this.tonball = new Player();	
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

	deathScreenTrigger
	()
	{
		if (this.currentHP === 0) {

			this.gameScreen.style.display = "none";
			this.deathScreen.style.display = "flex";

			this.dsScore.textContent = this.currentScore;
			this.dsHCombo.textContent = this.highestCombo;

			this.scoreSaver(this.currentScore);

			this.stopGame();
		}
	}

	stopGame
	()
	{
		// Erasing you, erasing me,,,,.,,
		clearInterval(this.animationInterval);
		clearInterval(this.timerThingy);
		clearTimeout(this.goMyNotes);

		// Eras ng  ou,  ras ng me, ,, .,
		this.notes.forEach((note) => {
			
			note.note.remove();
		});

		this.notes.length = 0; 

		//  ra  n   ou   r s n   e,  , ., 
		this.tonball.tonball.remove();

		// anyway, removing the keyboard listener here so that it wont snowball and break everything anymore :P
		removeEventListener("keydown", this.arrowsInput);
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

			if (note.x + note.width < this.tonball.x)
			{
				this.notes.splice(index, 1);                                                      
				note.note.remove();

				this.currentHP -= 1;
				this.HP.textContent = this.currentHP;
				this.deathScreenTrigger();

				this.comboBreaking();
			}
		});
	}

  controlsListener
	()
	{		
		this.arrowsInput = (event) => {
		
			this.noteHit = false;

			// today i found out that a forEach can have two parameters, neat!! :D
			this.notes.forEach((note, index) => {

				// slicing the first 5 characters to get rid of "Arrow" here xP
				this.keyPressed = event.key.slice(5, event.key.length).toLowerCase() === note.randomNote;

				if (this.keyPressed === true) {

					if (note.x < this.tonball.x + this.tonball.width && note.x + note.width > this.tonball.x) {
						
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
				this.deathScreenTrigger();

				this.comboBreaking();
			}
		};

		// now i can use this on stopGame !! yay !!
		addEventListener("keydown", this.arrowsInput);
	}
}
