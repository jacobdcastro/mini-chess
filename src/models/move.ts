import getSpaceId from '../helpers/getSpaceId';
import { Board, Position, AnyPiece } from '../helpers/interfaces';

class Move {
  movedPieceIsWhite: boolean;
  movedPieceId: string;
  startingLocation: Position;
  endingLocation: Position;
  capturedPieceId: string | null;

  constructor(
    private board: Board,
    private piece: AnyPiece,
    private newCoords: Position
  ) {
    this.movedPieceIsWhite = this.piece.isWhite;
    this.movedPieceId = this.piece._id;
    this.startingLocation = piece.position;
    this.startingLocation._id = getSpaceId(piece.position.y, piece.position.x);
    this.endingLocation = this.newCoords;
    this.endingLocation._id = getSpaceId(newCoords.y, newCoords.x);
    this.capturedPieceId = this.getCapturedPiece();
  }

  getCapturedPiece() {
    const { x, y } = this.endingLocation;
    const { piece } = this.board[y][x];
    return piece ? piece._id : null;
  }
}

export default Move;
