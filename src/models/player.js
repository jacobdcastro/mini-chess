class Player {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.online = undefined;
		this.isHuman = undefined;
		this.changeName = this.changeName;
		this.setHumanity = this.setHumanity;
		this.cursorPosition = { x: 0, y: 0 };
		this.moveCursor = this.moveCursor;
	}

	changeName(newName) {
		this.name = newName;
	}

	setHumanity(isHuman) {
		this.isHuman = isHuman;
	}

	moveCursor(key) {
		const { x, y } = this.cursorPosition;
		if (key === 1 && y < 7) this.cursorPosition = { x, y: y + 1 };
		if (key === 2 && x < 7) this.cursorPosition = { x: x + 1, y };
		if (key === 3 && y > 0) this.cursorPosition = { x, y: y - 1 };
		if (key === 4 && x > 0) this.cursorPosition = { x: x - 1, y };
	}
}

module.exports = Player;
