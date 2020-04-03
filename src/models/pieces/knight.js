const Piece = require('../piece');
const checkIsWhite = require('../../helpers/checkIsWhite');

class Knight extends Piece {
  constructor(isWhite, position, idNum) {
    super(isWhite, position, '♞ ', '♘ ', 3);
    this._id = (isWhite ? 'N' : 'n') + idNum.toString();
    this.getPossibleMoves = this.getPossibleMoves;
  }

  getPossibleMoves(board) {
    let possibleMoves = [];
    const { x, y } = this.position;

    // all possible knight moves, in clockwise order
    const knightMoves = [
      { x: x + 1, y: y + 2 },
      { x: x + 2, y: y + 1 },
      { x: x + 2, y: y - 1 },
      { x: x + 1, y: y - 2 },
      { x: x - 1, y: y - 2 },
      { x: x - 2, y: y - 1 },
      { x: x - 2, y: y + 1 },
      { x: x - 1, y: y + 2 },
    ];

    knightMoves.forEach(move => {
      // only check move if it's on the board
      if (move.x < 8 && move.x >= 0 && move.y < 8 && move.y >= 0) {
        const { piece } = board[move.y][move.x];

        // check if space is occupied by piece
        if (piece !== null) {
          if (checkIsWhite(piece._id) !== this.isWhite) {
            possibleMoves.push(move);
          } else if (piece.isWhite === this.isWhite) {
            possibleMoves.push();
          }
        } else {
          possibleMoves.push(move);
        }
      }
    });

    return possibleMoves;
  }
}

module.exports = Knight;
