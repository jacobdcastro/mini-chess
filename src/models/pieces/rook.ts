import Piece from '../piece';
import checkIsWhite from '../../helpers/checkIsWhite';
import { Position, Board } from '../../helpers/interfaces';
import { filterInvalidMoves } from '../../helpers/virtualBoard';

class Rook extends Piece {
  public _id: string;
  constructor(isWhite: boolean, public position: Position, idNum: number) {
    super(isWhite, position, '♜ ', '♖ ', 5);
    this._id = (isWhite ? 'R' : 'r') + idNum.toString();
    this.getPossibleMoves = this.getPossibleMoves;
  }

  // TODO finish doing king check for each move
  getPossibleMoves(board: Board) {
    let possibleMoves: Position[] = [];
    const { x, y } = this.position;

    // ? eastward moves
    // if x === 7, then piece is on east-side edge
    // of board, don't look for moves in this direction
    if (x !== 7) {
      for (let i = x + 1; i < 8; i++) {
        const pos: Position = { x: i, y };
        const { piece } = board[y][i];

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
    }

    // ? westward moves
    // if x === 0, then piece is on west-side edge
    // of board, don't look for moves in this direction
    if (x !== 0) {
      for (let i = x - 1; i >= 0; i--) {
        const pos: Position = { x: i, y };
        const { piece } = board[y][i];

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
    }

    // ? northward moves
    // if y === 7, then piece is on north-side edge
    // of board, don't look for moves in this direction
    if (y !== 7) {
      for (let i = y + 1; i < 8; i++) {
        const pos: Position = { x, y: i };
        const { piece } = board[i][x];

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
    }

    // ? southward moves
    // if y === 7, then piece is on south-side edge
    // of board, don't look for moves in this direction
    if (y !== 0) {
      for (let i = y - 1; i >= 0; i--) {
        const pos: Position = { x, y: i };
        const { piece } = board[i][x];

        if (piece !== null) {
          // if space is occupied by enemy, add space and break loop
          if (checkIsWhite(piece._id) !== this.isWhite) {
            possibleMoves.push(pos);
            break;
          } else {
            break;
          }
        } else {
          possibleMoves.push({ x, y: i });
        }
      }
    }

    return filterInvalidMoves(this._id, possibleMoves, board);
  }
}

export default Rook;
