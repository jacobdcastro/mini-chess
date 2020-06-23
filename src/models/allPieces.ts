import { Pawn, Bishop, Knight, Rook, King, Queen } from './pieces';
import { AllPieces, AnyPiece, Board } from '../helpers/interfaces';
import Move from './move';
import { createVirtualBoard } from '../helpers/virtualBoard';

const defaultBoard = {
  white: [
    new Rook(true, { x: 0, y: 0 }, 1),
    new Knight(true, { x: 1, y: 0 }, 1),
    new Bishop(true, { x: 2, y: 0 }, 1),
    new Queen(true, { x: 3, y: 0 }, 1),
    new King(true, { x: 4, y: 0 }),
    new Bishop(true, { x: 5, y: 0 }, 2),
    new Knight(true, { x: 6, y: 0 }, 2),
    new Rook(true, { x: 7, y: 0 }, 2),
  ],
  black: [
    new Rook(false, { x: 0, y: 7 }, 1),
    new Knight(false, { x: 1, y: 7 }, 1),
    new Bishop(false, { x: 2, y: 7 }, 1),
    new Queen(false, { x: 3, y: 7 }, 1),
    new King(false, { x: 4, y: 7 }),
    new Bishop(false, { x: 5, y: 7 }, 2),
    new Knight(false, { x: 6, y: 7 }, 2),
    new Rook(false, { x: 7, y: 7 }, 2),
  ],
};

class Pieces {
  public active: AllPieces;
  public captured: AllPieces;

  constructor(board?: Board) {
    // @ts-ignore
    this.active = defaultBoard;
    this.addInitialPawns();

    this.captured = {
      white: [],
      black: [],
    };
  }

  initializeMove(move: Move) {
    const {
      movedPieceIsWhite,
      movedPieceId,
      endingLocation,
      capturedPieceId,
    } = move;
    let selectedPiece: AnyPiece | undefined;
    let capturedPiece: AnyPiece | undefined;

    if (movedPieceIsWhite) {
      selectedPiece = this.active.white.find(p => p._id === movedPieceId);
    } else {
      selectedPiece = this.active.black.find(p => p._id === movedPieceId);
    }

    if (selectedPiece) selectedPiece.move(endingLocation);

    if (capturedPieceId !== null) {
      if (movedPieceIsWhite) {
        capturedPiece = this.active.black.find(p => p._id === capturedPieceId);
        if (capturedPiece) this.captured.black.push(capturedPiece);
        this.active.black = this.active.black.filter(
          p => p._id !== capturedPieceId
        );
      } else {
        capturedPiece = this.active.white.find(p => p._id === capturedPieceId);
        if (capturedPiece) this.captured.white.push(capturedPiece);
        this.active.white = this.active.white.filter(
          p => p._id !== capturedPieceId
        );
      }
    }
  }

  private addInitialPawns() {
    // white pawns
    for (let i = 0; i < 8; i++) {
      this.active.white.push(new Pawn(true, { x: i, y: 1 }, i + 1));
    }

    // black pawns
    for (let i = 0; i < 8; i++) {
      this.active.black.unshift(new Pawn(false, { x: i, y: 6 }, i + 1));
    }
  }
}

export default Pieces;
