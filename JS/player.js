class Player {

	constructor
	()
	{
		this.gameScreen = document.querySelector(".game-screen");

		this.ball = document.createElement("div");
		this.sprite = "Imgs/tonplayer.gif";
		this.width = 250;
		this.height = 250;
		this.x = this.gameScreen.clientWidth * 0.05;
		this.y = this.gameScreen.clientHeight * 0.35;

		this.ball.style.position = "absolute";
		this.ball.style.width = `${this.width}px`;
		this.ball.style.height = `${this.height}px`;
		this.ball.style.top = `${this.y}px`;
		this.ball.style.left = `${this.x}px`;

		this.ball.style.backgroundImage = `url("${this.sprite}")`;
		this.ball.style.backgroundPosition = `center`;
		this.ball.style.backgroundSize = `cover`

		this.gameScreen.appendChild(this.ball);
	}
}
