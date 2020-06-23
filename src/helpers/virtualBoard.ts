import { Board, AnyPiece, Position } from './interfaces';
import Space from '../models/space';
import Pieces from '../models/allPieces';

export const createVirtualPieces = (currentBoard: Board) => {
  const virtualPieces: Pieces = new Pieces();
};

export const createVirtualBoard = (allPieces: AnyPiece[]) => {
  let virtualBoard: Board = [[], [], [], [], [], [], [], []];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const piece = allPieces.find(
        ({ position }) => position.x === x && position.y === y
      );
      virtualBoard[y][x] = new Space(
        y,
        x,
        piece ? { type: 'ref', _id: piece._id } : null
      );
    }
  }
  return virtualBoard;
};

export const kingIsInCheck = (
  kingIsWhite: boolean,
  currentBoard: Board,
  gamePieces: Pieces
): boolean => {
  const wPieces: AnyPiece[] = gamePieces.active.white;
  const bPieces: AnyPiece[] = gamePieces.active.black;
  const wKing = wPieces.find(p => p._id === 'K');
  const bKing = bPieces.find(p => p._id === 'k');

  if (kingIsWhite) {
    let allPossibleBlackMoves: Position[] = [];

    bPieces.forEach((p: AnyPiece) => {
      const moves = p.getPossibleMoves(currentBoard);
      allPossibleBlackMoves.push(...moves);
    });

    // returns true if king's current position is a possible move of black piece
    const wKingIsInCheck = allPossibleBlackMoves.some(
      pos => pos.x === wKing.position.x && pos.y === wKing.position.y
    );

    return wKingIsInCheck;
  } else {
    let allPossibleWhiteMoves: Position[] = [];

    wPieces.forEach((p: AnyPiece) => {
      const moves = p.getPossibleMoves(currentBoard);
      allPossibleWhiteMoves.push(...moves);
    });

    // returns true if king's current position is a possible move of white piece
    const bKingIsInCheck: boolean = allPossibleWhiteMoves.some(
      pos => pos.x === bKing.position.x && pos.y === bKing.position.y
    );

    return bKingIsInCheck;
  }
};

// run in return statement of each piece's getPossibleMove method
export const filterInvalidMoves = (
  pieceId: string,
  moves: Position[],
  board: Board
) => {
  const validMoves = moves.filter(move => {
    board.forEach(row =>
      row.forEach(space => {
        'hi';
      })
    );
  });

  return moves;
};

export const nextMoveIsCheckmate = (currentBoard: Board) => {};
