import { Board, AnyPiece, Position } from './interfaces';
import Pieces from '../models/allPieces';

export const kingIsInPath = () => {};

export const kingIsInCheck = (
  kingIsWhite: boolean,
  currentBoard: Board,
  gamePieces: Pieces
) => {
  const wPieces: AnyPiece[] = gamePieces.active.white;
  const bPieces: AnyPiece[] = gamePieces.active.black;
  const wKing: AnyPiece = wPieces.find(p => p._id === 'K');
  const bKing: AnyPiece = bPieces.find(p => p._id === 'k');

  if (kingIsWhite) {
    let allPossibleBlackMoves: Position[] = [];

    bPieces.forEach(p => {
      const moves = p.getPossibleMoves(currentBoard);
      allPossibleBlackMoves.push(...moves);
    });

    const wKingIsInCheck = allPossibleBlackMoves.some(
      pos => pos.x === wKing.position.x && pos.y === wKing.position.y
    );

    return wKingIsInCheck;
  } else {
    let allPossibleWhiteMoves: Position[] = [];

    wPieces.forEach(p => {
      const moves = p.getPossibleMoves(currentBoard);
      allPossibleWhiteMoves.push(...moves);
    });

    const bKingIsInCheck = allPossibleWhiteMoves.some(
      pos => pos.x === bKing.position.x && pos.y === bKing.position.y
    );

    return bKingIsInCheck;
  }
};

export const nextMoveIsCheckmate = (currentBoard: Board) => {};
