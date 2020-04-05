import getSpaceId from '../helpers/getSpaceId';
import { Position, PieceRef } from '../helpers/interfaces';

class Space {
  public piece: PieceRef | null;
  public _id: string;
  public position: Position;

  constructor(y: number, x: number, piece: PieceRef) {
    this._id = getSpaceId(y, x);
    this.position = { x, y };
    this.piece = piece ? piece : null;
  }

  public setPiece(piece: PieceRef) {
    this.piece = piece;
  }
}

export default Space;
