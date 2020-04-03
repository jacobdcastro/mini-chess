const getSpaceId = require('../helpers/getSpaceId');
// import Position from "../@types/Position";

class Piece {
  constructor(isWhite, position, imgW, imgB, value) {
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
    this.position = undefined;
    return this;
  }

  move(newCoords) {
    const { x, y } = newCoords;
    this.position = { x, y, _id: getSpaceId(y, x) };
    this.hasMoved = true;
    return this;
  }
}

module.exports = Piece;
