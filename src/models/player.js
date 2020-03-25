class Player {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.online = true;
		this.isHuman = true;
	}

	changeName(newName) {
		this.name = newName;
	}
}
