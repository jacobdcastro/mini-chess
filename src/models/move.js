const getSpaceId = require('../helpers/getSpaceId');

class Move {
  constructor(board, piece, newCoords) {
    this.movedPieceIsWhite = piece.isWhite;
    this.movedPieceId = piece._id;
    this.startingLocation = piece.position;
    this.startingLocation._id = getSpaceId(piece.position.y, piece.position.x);
    this.endingLocation = newCoords;
    this.endingLocation._id = getSpaceId(newCoords.y, newCoords.x);
    this.capturedPieceId = this.getCapturedPiece(board);
  }

  getCapturedPiece(board) {
    const { x, y } = this.endingLocation;
    const { piece } = board[y][x];
    return piece ? piece._id : null;
  }
}

module.exports = Move;
