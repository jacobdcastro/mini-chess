const Piece = require("../piece");
const getSpaceIds = require("../../helpers/getSpaceIds");

class Knight extends Piece {
	constructor(isWhite, position) {
		super(isWhite, position, "♞ ", "♘ ");
		this._id = isWhite ? "N" : "n";
		this.getPossibleMoves = this.getPossibleMoves;
	}

	getPossibleMoves(board) {
		let possibleMoves = [];
		const { x, y } = this.position;

		// all possible knight moves, in clockwise order
		const knightMoves = [
			{ x: x + 1, y: y + 2 },
			{ x: x + 2, y: y + 1 },
			{ x: x + 2, y: y - 1 },
			{ x: x + 1, y: y - 2 },
			{ x: x - 1, y: y - 2 },
			{ x: x - 2, y: y - 1 },
			{ x: x - 2, y: y + 1 },
			{ x: x - 1, y: y + 2 }
		];

		knightMoves.forEach(move => {
			// only check move if it's on the board
			if (move.x < 8 && move.x >= 0 && move.y < 8 && move.y >= 0) {
				const { piece } = board[move.y][move.x];

				if (piece !== null) {
					// if space is occupied by enemy, add space and break loop
					if (piece.isWhite !== this.isWhite) {
						possibleMoves.push(move);
					}
				} else {
					possibleMoves.push(move);
				}
			}
		});

		return getSpaceIds(possibleMoves);
	}
}

module.exports = Knight;
