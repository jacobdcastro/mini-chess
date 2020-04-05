import getSpaceId from '../helpers/getSpaceId';
import { Position } from '../@types/Position';
import { PieceIcon, PieceValue } from '../@types/PieceRef';

class Piece {
  isCaptured: boolean;
  icon: PieceIcon;
  hasMoved: boolean;

  constructor(
    public isWhite: boolean,
    public position: Position,
    imgW: PieceIcon,
    imgB: PieceIcon,
    public value: PieceValue
  ) {
    this.position = position;
    this.position._id = getSpaceId(position.y, position.x);
    this.isCaptured = false;
    this.isWhite = isWhite;
    this.icon = isWhite ? imgW : imgB;
    this.capture = this.capture;
    this.hasMoved = false;
    this.move = this.move;
    this.value = value;
  }

  capture() {
    this.isCaptured = true;
    return this;
  }

  move(newCoords: Position) {
    const { x, y } = newCoords;
    this.position = { x, y, _id: getSpaceId(y, x) };
    this.hasMoved = true;
    return this;
  }
}

export default Piece;
