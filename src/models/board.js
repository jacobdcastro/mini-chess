const Space = require("./space");

class Board {
	constructor(active) {
		this.board = [[], [], [], [], [], [], [], []];

		this.updateBoard(active);
		this.updateBoard = this.updateBoard;
	}

	updateBoard(active) {
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
}

module.exports = Board;
