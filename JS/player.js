class Player {

	constructor
	()
	{
		this.gameScreen = document.querySelector(".game-screen");

		this.tonball = document.createElement("div");
		this.sprite = "Imgs/Game/tonplayer.gif";
		this.width = 200;
		this.height = 200;
		this.x = this.gameScreen.clientWidth * 0.05;
		this.y = this.gameScreen.clientHeight * 0.35;

		this.tonball.style.position = "absolute";
		this.tonball.style.width = `${this.width}px`;
		this.tonball.style.height = `${this.height}px`;
		this.tonball.style.top = `${this.y}px`;
		this.tonball.style.left = `${this.x}px`;

		this.tonball.style.backgroundImage = `url("${this.sprite}")`;
		this.tonball.style.backgroundPosition = `center`;
		this.tonball.style.backgroundSize = `cover`

		this.gameScreen.appendChild(this.tonball);
	}
}
