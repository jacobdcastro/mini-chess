const Piece = require('../piece');
const checkIsWhite = require('../../helpers/checkIsWhite');

class King extends Piece {
  constructor(isWhite, position) {
    super(isWhite, position, '♚ ', '♔ ', 1000000000000);
    this._id = isWhite ? 'K' : 'k';
    this.inCheck = false;
    this.getPossibleMoves = this.getPossibleMoves;
  }

  getPossibleMoves(board) {
    let possibleMoves = [];
    const { x, y } = this.position;

    // all possible king moves, in clockwise order
    const kingMoves = [
      { x, y: y + 1 },
      { x: x + 1, y: y + 1 },
      { x: x + 1, y },
      { x: x + 1, y: y - 1 },
      { x, y: y - 1 },
      { x: x - 1, y: y - 1 },
      { x: x - 1, y },
      { x: x - 1, y: y + 1 },
    ];

    kingMoves.forEach(move => {
      // if move is off the board, skip it
      if (move.x > 7 || move.x < 0 || move.y > 7 || move.y < 0) return;

      const { piece } = board[move.y][move.x];
      if (piece !== null) {
        // if space is occupied by enemy, add space
        if (checkIsWhite(piece._id) !== this.isWhite) {
          possibleMoves.push(move);
        }
      } else {
        possibleMoves.push(move);
      }
    });

    return possibleMoves;
  }
}

module.exports = King;
