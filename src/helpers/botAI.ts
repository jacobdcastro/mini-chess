import { Position, Board, AnyPiece } from './interfaces';
import Pieces from '../models/pieces';
import Player from '../models/player';

interface MovablePiece {
  readonly piece: AnyPiece;
  readonly possibleMoves: Position[];
}

interface SelectedPiece {
  readonly selectedPiece: AnyPiece;
  readonly newCoords: Position;
}

const examineAllPossibleMoves = (
  board: Board,
  pieces: Pieces,
  player: Player
): MovablePiece[] => {
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

const chooseRandomMove = (allMovablePieces: MovablePiece[]): SelectedPiece => {
  const ran = Math.floor(Math.random() * allMovablePieces.length);
  const selectedPiece = allMovablePieces[ran];
  const ran2 = Math.floor(Math.random() * selectedPiece.possibleMoves.length);
  const selectedMove = selectedPiece.possibleMoves[ran2];
  return { selectedPiece: selectedPiece.piece, newCoords: selectedMove };
};

const botMovePiece = (
  b: Board,
  pc: Pieces,
  pl: Player,
  movePiece: (selectedPiece: AnyPiece, newCoords: Position) => {}
) => {
  const allMovablePieces = examineAllPossibleMoves(b, pc, pl);
  const { selectedPiece, newCoords } = chooseRandomMove(allMovablePieces);

  movePiece(selectedPiece, newCoords);
};

export default botMovePiece;
