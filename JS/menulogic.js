class Menu {

	constructor
	()
	{
		this.startingScreen = document.querySelector(".starting-screen");
		this.menuScreen = document.querySelector(".menu-screen");
		this.gameScreen = document.querySelector(".game-screen");

		this.highScore = document.querySelector(".high-score");
		this.speed = document.querySelector(".speed");
		this.diff = document.querySelector(".difficulty");
		
		this.chosenSpeed = null;
		this.chosenDiff = null;
	}

	goToMenu
	()
	{
		this.startingScreen.style.display = "none";
		this.menuScreen.style.display = "flex";
	}

	returnToStart
	()
	{
		this.menuScreen.style.display = "none";
		this.startingScreen.style.display = "flex";
	}
}
