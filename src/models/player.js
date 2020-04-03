class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.online = undefined;
    this.isHuman = undefined;
    this.changeName = this.changeName;
    this.setHumanity = this.setHumanity;
    this.cursorPosition = color === 'w' ? { x: 0, y: 0 } : { x: 0, y: 7 };
    this.getNewPos = this.getNewPos;
  }

  changeName(newName) {
    this.name = newName;
  }

  setHumanity(isHuman) {
    this.isHuman = isHuman;
  }
}

module.exports = Player;
