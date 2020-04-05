// @ts-nocheck
import Piece from '../piece';
import checkIsWhite from '../../helpers/checkIsWhite';

class Queen extends Piece {
  constructor(isWhite, position, idNum) {
    super(isWhite, position, '♛ ', '♕ ', 9);
    this._id = (isWhite ? 'Q' : 'q') + idNum.toString();
    this.getPossibleMoves = this.getPossibleMoves;
  }

  getPossibleMoves(board) {
    let possibleMoves = [];
    const { x, y } = this.position;

    // ? northward movement
    // if y === 7, then piece is on north-side edge
    // of board, don't look for moves in this direction
    if (y !== 7) {
      for (let i = y + 1; i < 8; i++) {
        const pos = { x, y: i };
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
    }

    // ? northeast movement
    for (let i = 1; i < 8; i++) {
      const pos = { x: x + i, y: y + i };
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

    // ? eastward moves
    // if x === 7, then piece is on east-side edge
    // of board, don't look for moves in this direction
    if (x !== 7) {
      for (let i = x + 1; i < 8; i++) {
        const pos = { x: i, y };
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

    // ? southeast movement
    for (let i = 1; i < 8; i++) {
      const pos = { x: x + i, y: y - i };
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

    // ? southward moves
    // if y === 7, then piece is on south-side edge
    // of board, don't look for moves in this direction
    if (y !== 0) {
      for (let i = y - 1; i >= 0; i--) {
        const pos = { x, y: i };
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

    // ? southwest movement
    for (let i = 1; i < 8; i++) {
      const pos = { x: x - i, y: y - i };
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

    // ? westward moves
    // if x === 0, then piece is on west-side edge
    // of board, don't look for moves in this direction
    if (x !== 0) {
      for (let i = x - 1; i >= 0; i--) {
        const pos = { x: i, y };
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

    // ? northwest movement
    for (let i = 1; i < 8; i++) {
      const pos = { x: x - i, y: y + i };
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

    return possibleMoves;
  }
}

export default Queen;
