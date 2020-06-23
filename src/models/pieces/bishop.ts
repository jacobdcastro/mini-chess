import Piece from '../piece';
import { Position, Board } from '../../helpers/interfaces';
import checkIsWhite from '../../helpers/checkIsWhite';
import { filterInvalidMoves } from '../../helpers/virtualBoard';

class Bishop extends Piece {
  _id: string;

  constructor(isWhite: boolean, position: Position, idNum: number) {
    super(isWhite, position, '♝ ', '♗ ', 3);
    this._id = (isWhite ? 'B' : 'b') + idNum.toString();
    this.getPossibleMoves = this.getPossibleMoves;
  }

  getPossibleMoves(board: Board) {
    let possibleMoves: Position[] = [];
    const { x, y } = this.position;

    // ? northeast movement
    for (let i = 1; i < 8; i++) {
      const pos: Position = { x: x + i, y: y + i };
      if (pos.x >= 8 || pos.y >= 8) break; // if off-board, break loop
      const { piece } = board[pos.y][pos.x];

      if (piece !== null) {
        // if space is occupied by enemy, add space and break loop
        if (checkIsWhite(piece._id) !== this.isWhite) {
          possibleMoves.push(pos);
          break;
        } else {
          break;
        }
      } else {
        possibleMoves.push(pos);
      }
    }

    // ? northwest movement
    for (let i = 1; i < 8; i++) {
      const pos: Position = { x: x - i, y: y + i };
      if (pos.x < 0 || pos.y >= 8) break; // if off-board, break loop
      const { piece } = board[pos.y][pos.x];

      if (piece !== null) {
        // if space is occupied by enemy, add space and break loop
        if (checkIsWhite(piece._id) !== this.isWhite) {
          possibleMoves.push(pos);
          break;
        } else {
          break;
        }
      } else {
        possibleMoves.push(pos);
      }
    }

    // ? southwest movement
    for (let i = 1; i < 8; i++) {
      const pos: Position = { x: x - i, y: y - i };
      if (pos.x < 0 || pos.y < 0) break; // if off-board, break loop
      const { piece } = board[pos.y][pos.x];

      if (piece !== null) {
        // if space is occupied by enemy, add space and break loop
        if (checkIsWhite(piece._id) !== this.isWhite) {
          possibleMoves.push(pos);
          break;
        } else {
          break;
        }
      } else {
        possibleMoves.push(pos);
      }
    }

    // ? southeast movement
    for (let i = 1; i < 8; i++) {
      const pos: Position = { x: x + i, y: y - i };
      if (pos.x >= 8 || pos.y < 0) break; // if off-board, break loop
      const { piece } = board[pos.y][pos.x];

      if (piece !== null) {
        // if space is occupied by enemy, add space and break loop
        if (checkIsWhite(piece._id) !== this.isWhite) {
          possibleMoves.push(pos);
          break;
        } else {
          break;
        }
      } else {
        possibleMoves.push(pos);
      }
    }

    return filterInvalidMoves(this._id, possibleMoves, board);
  }
}

export default Bishop;
