import Piece from '../piece';
import checkIsWhite from '../../helpers/checkIsWhite';
import { Position, Board } from '../../helpers/interfaces';
import { filterInvalidMoves } from '../../helpers/virtualBoard';

class King extends Piece {
  _id: string;
  inCheck: boolean;

  constructor(isWhite: boolean, position: Position) {
    super(isWhite, position, '♚ ', '♔ ', 1000000000000);
    this._id = isWhite ? 'K' : 'k';
    this.inCheck = false;
    this.setCheck = this.setCheck;
    this.getPossibleMoves = this.getPossibleMoves;
  }

  public setCheck(inCheck: boolean) {
    this.inCheck = inCheck;
  }

  public getPossibleMoves(board: Board) {
    let possibleMoves: Position[] = [];
    const { x, y } = this.position;

    // all possible king moves, in clockwise order
    const kingMoves: Position[] = [
      { x, y: y + 1 },
      { x: x + 1, y: y + 1 },
      { x: x + 1, y },
      { x: x + 1, y: y - 1 },
      { x, y: y - 1 },
      { x: x - 1, y: y - 1 },
      { x: x - 1, y },
      { x: x - 1, y: y + 1 },
    ];

    kingMoves.forEach((move: Position) => {
      // if move is off the board, skip it
      if (move.x > 7 || move.x < 0 || move.y > 7 || move.y < 0) return;

      const { piece } = board[move.y][move.x];
      if (piece !== null) {
        // if space is occupied by enemy, add space as possible move
        if (checkIsWhite(piece._id) !== this.isWhite) {
          possibleMoves.push(move);
        }
      } else {
        possibleMoves.push(move);
      }
    });

    return filterInvalidMoves(this._id, possibleMoves, board);
  }
}

export default King;
