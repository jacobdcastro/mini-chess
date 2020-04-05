import Space from '../models/space';
import Pawn from '../models/pieces/pawn';
import Bishop from '../models/pieces/bishop';
import Knight from '../models/pieces/knight';
import Rook from '../models/pieces/rook';
import King from '../models/pieces/king';
import Queen from '../models/pieces/queen';

export interface Position {
  x: number;
  y: number;
  _id?: string;
}

export interface PieceRef {
  readonly type: string;
  readonly _id: string;
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

export type Color = 'w' | 'b';

export type AnyPiece = Pawn | Bishop | Knight | Rook | King | Queen;

export interface AllPieces {
  white: AnyPiece[];
  black: AnyPiece[];
}

export interface HistoryItem {}
