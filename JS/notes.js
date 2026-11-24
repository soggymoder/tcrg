class Note {

	constructor 
	(chosenSpeed)
	{
		this.gameScreen = document.querySelector(".game-screen");
	
		this.note = document.createElement("div");
		this.sprites = {
			left:		"Imgs/Game/noteleft.png",
			right:	"Imgs/Game/noteright.png",
			up:			"Imgs/Game/noteup.png",
			down:		"Imgs/Game/notedown.png",
		};

		this.width = 100;
		this.height = 100;
		this.x = this.gameScreen.clientWidth - this.width; // spent a good bit on the MDN mines looking for something to make the fuckass start position be responsive just like the game screen's size oughhhhhhh
		this.y = this.gameScreen.clientHeight * 0.40; // this should give me enough spare space for when i add ton to the bottom of the screen,, unless i change my mind, in which case, ig centering this will do,,

		this.noteDirections = ["left", "right", "up", "down"];
		this.noteDirectionPicker();

		this.speed = chosenSpeed;
		this.dmg = -1;

		this.note.style.position = "absolute";
		this.note.style.width = `${this.width}px`;
		this.note.style.height = `${this.height}px`;
		this.note.style.top = `${this.y}px`;
		this.note.style.left = `${this.x}px`;

		this.note.style.backgroundImage = `url("${this.resultNote}")`;
		this.note.style.backgroundPosition = `center`;
		this.note.style.backgroundSize = `cover`

		this.gameScreen.appendChild(this.note);
	}

	noteDirectionPicker
	()
	{
		this.randomNote = this.noteDirections[Math.floor(this.noteDirections.length * Math.random())];

		this.resultNote = this.sprites[this.randomNote];	
	}

	move
	()
	{
		this.x -= this.speed
		this.note.style.left = `${this.x}px`;
	}
}
