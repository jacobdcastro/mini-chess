import Piece from '../models/piece';
import Space from '../models/space';

export interface Position {
  x: Number;
  y: Number;
  _id?: String;
}

export interface PieceRef {
  readonly type: String;
  readonly _id: String;
}

export type PieceIcon =
  | '♟ ' // P
  | '♙ ' // p
  | '♞ ' // N
  | '♘ ' // n
  | '♝ ' // B
  | '♗ ' // b
  | '♜ ' // R
  | '♖ ' // r
  | '♚ ' // K
  | '♔ ' // k
  | '♛ ' // Q
  | '♕ '; // q

export type PieceValue = 1 | 3 | 5 | 9 | 1000000000000;

export type Board = Space[][];
