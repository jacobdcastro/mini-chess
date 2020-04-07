import Pieces from './pieces';
import Space from './space';
import Player from './player';
import { getBoardSnapshot, checkCastling } from '../helpers/fen';
import { HistoryItem, Board } from '../helpers/interfaces';
import Move from './move';

class Game {
  public pieces: Pieces;
  public isWhiteTurn: boolean;
  public player1: Player;
  public player2: Player;
  public history: HistoryItem[];
  public started: Date;
  public ended: Date | undefined;
  public winner: Player | undefined;
  public board: Board;
  public setGame?: () => {}; // set in App.tsx

  constructor() {
    this.pieces = new Pieces();
    this.isWhiteTurn = true;
    this.player1 = new Player('Player 1', 'w');
    this.player2 = new Player('Player 2', 'b');
    this.history = [];
    // TODO this.addPlayer = this.addPlayer;
    this.started = new Date();
    this.ended = undefined;
    this.winner = undefined;
    this.updateGame = this.updateGame;
    this.board = this.createInitBoard();
  }

  private createInitBoard() {
    let newBoard: Board = [[], [], [], [], [], [], [], []];
    const { white, black } = this.pieces.active;
    const allPieces = white.concat(black);

    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const piece = allPieces.find(
          ({ position }) => position.x === x && position.y === y
        );

        newBoard[y][x] = new Space(
          y,
          x,
          piece ? { type: 'ref', _id: piece._id } : null
        );
      }
    }

    return newBoard;
  }

  public updateGame(move: Move) {
    if (move) this.pieces.initializeMove(move);
    const { white, black } = this.pieces.active;
    const allPieces = white.concat(black);

    // create new board
    let updatedBoard: Board = [[], [], [], [], [], [], [], []];
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const piece = allPieces.find(
          ({ position }) => position.x === x && position.y === y
        );
        updatedBoard[y][x] = new Space(
          y,
          x,
          piece ? { type: 'ref', _id: piece._id } : null
        );
      }
    }

    this.board = updatedBoard;

    if (move) {
      this.isWhiteTurn = !this.isWhiteTurn;
      // this.updateHistory(move);
      return this;
    }
  }

  // TODO finish fen generation
  // https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
  public updateHistory(move: Move) {
    let fen: string = '';
    const timestamp: Date = new Date();

    // board snapshot
    fen += getBoardSnapshot(this.board);

    // which color's turn
    fen += ' ' + this.isWhiteTurn + ' ';

    // determine castling abilities
    fen += checkCastling(this.pieces);

    return { fen, timestamp };
  }

  // TODO add player function for online play
  // public addPlayer(name: string, color: Color) {
  //   if (this.players.length === 2) return;
  //   else if (this.players.length === 1) {
  //     if (this.players[0].color === 'w') {
  //       this.players.push(new Player(name, 'b'));
  //     } else {
  //       this.players.push(new Player(name, 'w'));
  //     }
  //   } else this.players.push(new Player(name, color));
  //   return this;
  // }
}

export default Game;
