import Piece from '../piece';
import { Position, Board } from '../../helpers/interfaces';
import checkIsWhite from '../../helpers/checkIsWhite';

class Knight extends Piece {
  public _id: string;

  constructor(isWhite: boolean, position: Position, idNum: 1 | 2) {
    super(isWhite, position, '♞ ', '♘ ', 3);
    this._id = (isWhite ? 'N' : 'n') + idNum.toString();
    this.getPossibleMoves = this.getPossibleMoves;
  }

  getPossibleMoves(board: Board) {
    let possibleMoves: Position[] = [];
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
          }
        } else {
          possibleMoves.push(move);
        }
      }
    });

    return possibleMoves;
  }
}

export default Knight;
