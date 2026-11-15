class Note {

	constructor 
	()
	{
		this.gameScreen = document.querySelector(".game-screen");
	
		this.note = document.createElement("div");
		this.sprite = "Imgs/testnote.png";
		this.width = 75;
		this.height = 75;
		this.x = this.gameScreen.clientWidth - this.width; // spent a good bit on the MDN mines looking for something to make the fuckass start position be responsive just like the game screen's size oughhhhhhh
		this.y = this.gameScreen.clientHeight * 0.40; // this should give me enough spare space for when i add ton to the bottom of the screen,, unless i change my mind, in which case, ig centering this will do,,

		this.speed = null;
		this.dmg = -1;

		this.note.style.position = "absolute";
		this.note.style.width = `${this.width}px`;
		this.note.style.height = `${this.height}px`;
		this.note.style.top = `${this.y}px`;
		this.note.style.left = `${this.x}px`;

		this.note.style.backgroundImage = `url("${this.sprite}")`;
		this.note.style.backgroundPosition = `center`;
		this.note.style.backgroundSize = `cover`

		this.gameScreen.appendChild(this.note);
	}

	move
	()
	{
		this.x -= this.speed
		this.note.style.left = `${this.x}px`;
	}
}
