import { Color, Position } from '../helpers/interfaces';

class Player {
  isHuman: boolean | undefined;
  online: boolean;
  cursorPosition: Position;

  constructor(public name: string, public color: Color) {
    this.name = name;
    this.color = color;
    this.online = true;
    this.isHuman = undefined;
    this.changeName = this.changeName;
    this.setHumanity = this.setHumanity;
    this.cursorPosition = color === 'w' ? { x: 0, y: 0 } : { x: 0, y: 7 };
    this.getNewPos = this.getNewPos;
  }

  changeName(newName: string) {
    this.name = newName;
  }

  setHumanity(isHuman: boolean) {
    this.isHuman = isHuman;
  }
}

export default Player;
