const Pieces = require('./pieces');
const Space = require('./space');
const Player = require('./player');
const { getBoardSnapshot, checkCastling } = require('../helpers/fen');

class Game {
  constructor() {
    this.pieces = new Pieces();
    this.isWhiteTurn = true;
    this.player1 = new Player('Player 1', 'w');
    this.player2 = new Player('Player 2', 'b');
    this.history = [];
    this.addPlayer = this.addPlayer;
    this.started = undefined;
    this.ended = undefined;
    this.winner = undefined;
    this.updateGame = this.updateGame;
    this.board = this.createInitBoard();
  }

  createInitBoard() {
    let newBoard = [[], [], [], [], [], [], [], []];
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

  updateGame(move) {
    if (move) this.pieces.initializeMove(move);
    const { white, black } = this.pieces.active;
    const allPieces = white.concat(black);

    // create new board
    let updatedBoard = [[], [], [], [], [], [], [], []];
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const piece = allPieces.find(
          ({ position }) => position.x === x && position.y === y
        );
        updatedBoard[y][x] = new Space(
          y,
          x,
          piece && { type: 'ref', _id: piece._id }
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
  updateHistory(move) {
    let fen = '';
    const timestamp = new Date();

    // board snapshot
    fen += getBoardSnapshot(this.board);

    // which color's turn
    fen += ' ' + this.turn + ' ';

    // determine castling abilities
    fen += checkCastling(this.pieces);

    return { fen, timestamp };
  }

  addPlayer(name, color) {
    if (this.players.length === 2) return;
    else if (this.players.length === 1) {
      if (this.players[0].color === 'w') {
        this.players.push(new Player(name, 'b'));
      } else {
        this.players.push(new Player(name, 'w'));
      }
    } else this.players.push(new Player(name, color));
    return this;
  }
}

module.exports = Game;
