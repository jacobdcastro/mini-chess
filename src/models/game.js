const Pieces = require("./pieces");
const Space = require("./space");
const { getBoardSnapshot, checkCastling } = require("../helpers/fen");

class Game {
	constructor() {
		this.pieces = new Pieces();
		this.board = [[], [], [], [], [], [], [], []];
		this.turn = "w";
		this.player1 = new Player("", "w");
		this.player2 = new Player("", "b");
		this.updateBoard = this.updateBoard;
		this.updateBoard();
		this.history = [this.updateHistory()];
		this.addPlayer = this.addPlayer;
	}

	updateBoard() {
		const { active } = this.pieces;
		const allPieces = active.white.concat(active.black);

		for (let y = 0; y < 8; y++) {
			for (let x = 0; x < 8; x++) {
				const piece = allPieces.find(
					({ position }) => position.x === x && position.y === y
				);
				this.board[y][x] = new Space(
					y,
					x,
					piece && { type: "ref", _id: piece._id }
				);
			}
		}
	}

	// TODO finish fen generation
	// https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
	updateHistory() {
		let fen = "";
		const timestamp = new Date();

		// board snapshot
		fen += getBoardSnapshot(this.board);

		// which color's turn
		fen += " " + this.turn + " ";

		// determine castling abilities
		fen += checkCastling(this.pieces);

		return { fen, timestamp };
	}

	addPlayer(name, color) {
		if (this.players.length === 2) return;
		else if (this.players.length === 1) {
			if (this.players[0].color === "w") {
				this.players.push(new Player(name, "b"));
			} else {
				this.players.push(new Player(name, "w"));
			}
		} else this.players.push(new Player(name, color));
	}
}

module.exports = Game;
