const Pawn = require("./pieces/pawn");
const Bishop = require("./pieces/bishop");
const Knight = require("./pieces/knight");
const Rook = require("./pieces/rook");
const King = require("./pieces/king");
const Queen = require("./pieces/queen");

class Pieces {
	constructor() {
		this.active = {
			white: [
				new Rook(true, { x: 0, y: 0 }, 1),
				new Knight(true, { x: 1, y: 0 }, 1),
				new Bishop(true, { x: 2, y: 0 }, 1),
				new Queen(true, { x: 3, y: 0 }, 1),
				new King(true, { x: 4, y: 0 }),
				new Bishop(true, { x: 5, y: 0 }, 2),
				new Knight(true, { x: 6, y: 0 }, 2),
				new Rook(true, { x: 7, y: 0 }, 2)
			],
			black: [
				new Rook(false, { x: 0, y: 7 }, 1),
				new Knight(false, { x: 1, y: 7 }, 1),
				new Bishop(false, { x: 2, y: 7 }, 1),
				new Queen(false, { x: 3, y: 7 }, 1),
				new King(false, { x: 4, y: 7 }),
				new Bishop(false, { x: 5, y: 7 }, 2),
				new Knight(false, { x: 6, y: 7 }, 2),
				new Rook(false, { x: 7, y: 7 }, 2)
			]
		};
		this.addInitialPawns();

		this.captured = {
			white: [],
			black: []
		};
	}

	addInitialPawns() {
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

module.exports = Pieces;
