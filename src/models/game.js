const Space = require("./space");
const Pawn = require("./pieces/pawn");
const Rook = require("./pieces/rook");
const Bishop = require("./pieces/bishop");
const Knight = require("./pieces/knight");
const King = require("./pieces/king");

class Game {
	constructor() {
		this.board = this.buildInitialBoard();
		this.capturedPieces = {
			black: [],
			white: []
		};
		this.player1 = {};
		this.player2 = {};
	}

	buildInitialBoard() {
		let board = [[], [], [], [], [], [], [], []];

		board[0][0] = new Space(0, 0, new Rook(true, { x: 0, y: 0 }));
		board[0][1] = new Space(0, 1, new Knight(true, { x: 1, y: 0 }));
		board[0][2] = new Space(0, 2, new Bishop(true, { x: 2, y: 0 }));
		board[0][3] = new Space(0, 3);
		board[0][4] = new Space(0, 4, new King(true, { x: 4, y: 0 }));
		board[0][5] = new Space(0, 5, new Bishop(true, { x: 5, y: 0 }));
		board[0][6] = new Space(0, 6, new Knight(true, { x: 0, y: 6 }));
		board[0][7] = new Space(0, 7, new Rook(true, { x: 7, y: 0 }));

		// white pawns
		for (let i = 0; i < 8; i++) {
			board[1].push(new Space(1, i, new Pawn(true, { x: i, y: 1 })));
		}

		// middle empty spaces
		for (let y = 2; y < 6; y++) {
			for (let x = 0; x < 8; x++) {
				board[y].push(new Space(y, x));
			}
		}

		// black pawns
		for (let i = 0; i < 8; i++) {
			board[6].push(new Space(6, i, new Pawn(false, { x: i, y: 6 })));
		}

		board[7][0] = new Space(7, 0, new Rook(false, { x: 0, y: 7 }));
		board[7][1] = new Space(7, 1, new Knight(false, { x: 1, y: 7 }));
		board[7][2] = new Space(7, 2, new Bishop(false, { x: 2, y: 7 }));
		board[7][3] = new Space(7, 3, new King(false, { x: 3, y: 7 }));
		board[7][4] = new Space(7, 4);
		board[7][5] = new Space(7, 5, new Bishop(false, { x: 5, y: 7 }));
		board[7][6] = new Space(7, 6, new Knight(false, { x: 6, y: 7 }));
		board[7][7] = new Space(7, 7, new Rook(false, { x: 7, y: 7 }));

		return board;
	}
}

const { board } = new Game();

console.log(board[7][3].piece.getPossibleMoves(board));

module.exports = Game;
