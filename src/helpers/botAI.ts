// @ts-nocheck
import { Position } from '../@types/Position';

interface MovablePiece {
  readonly piece: object;
  readonly possibleMoves: Position[];
}

const examineAllPossibleMoves = (board, pieces, player): MovablePiece[] => {
  let allMovablePieces: MovablePiece[] = [];
  const allColorPieces =
    player.color === 'w' ? pieces.active.white : pieces.active.black;

  allColorPieces.forEach(p => {
    const possibleMoves = p.getPossibleMoves(board);
    if (possibleMoves.length > 0) {
      allMovablePieces.push({ piece: p, possibleMoves });
    }
  });

  return allMovablePieces;
};

const chooseRandomMove = (allMovablePieces: MovablePiece[]) => {
  const ran = Math.floor(Math.random() * allMovablePieces.length);
  const selectedPiece = allMovablePieces[ran];
  const ran2 = Math.floor(Math.random() * selectedPiece.possibleMoves.length);
  const selectedMove = selectedPiece.possibleMoves[ran2];
  return { selectedPiece: selectedPiece.piece, newCoords: selectedMove };
};

const botMovePiece = (b, pc, pl, movePiece) => {
  const allMovablePieces = examineAllPossibleMoves(b, pc, pl);
  const { selectedPiece, newCoords } = chooseRandomMove(allMovablePieces);

  movePiece(selectedPiece, newCoords);
};

export default botMovePiece;
