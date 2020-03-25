const Piece = require("../piece");
const getSpaceIds = require("../../helpers/getSpaceIds");

class Rook extends Piece {
	constructor(isWhite, position) {
		super(isWhite, position, "♜ ", "♖ ");
		this._id = isWhite ? "R" : "r";
		this.firstMove = false;
		this.getPossibleMoves = this.getPossibleMoves;
	}

	getPossibleMoves(board) {
		let possibleMoves = [];
		const { x, y } = this.position;

		// x-axis moves
		for (let i = x + 1; i < 8; i++) {
			const pos = { x: i, y };
			const { piece } = board[y][i];

			if (piece !== null) {
				// if space is occupied by enemy, add space and break loop
				if (piece.isWhite !== this.isWhite) {
					possibleMoves.push(pos);
					break;
				} else {
					break;
				}
			}
			possibleMoves.push(pos);
		}

		// x-axis opposite moves
		for (let i = x - 1; i >= 0; i--) {
			const pos = { x: i, y };
			const { piece } = board[y][i];

			if (piece !== null) {
				// if space is occupied by enemy, add space and break loop
				if (piece.isWhite !== this.isWhite) {
					possibleMoves.push(pos);
					break;
				} else {
					break;
				}
			}
			possibleMoves.push(pos);
		}

		// y-axis moves
		for (let i = y + 1; i < 8; i++) {
			const pos = { x, y: i };
			const { piece } = board[i][x];

			if (piece !== null) {
				// if space is occupied by enemy, add space and break loop
				if (piece.isWhite !== this.isWhite) {
					possibleMoves.push(pos);
					break;
				} else {
					break;
				}
			}
			possibleMoves.push(pos);
		}

		// y-axis opposite moves
		for (let i = y + 1; i >= 0; i--) {
			const pos = { x, y: i };
			const { piece } = board[i][x];

			if (piece !== null) {
				// if space is occupied by enemy, add space and break loop
				if (piece.isWhite !== this.isWhite) {
					possibleMoves.push(pos);
					break;
				} else {
					break;
				}
			}
			possibleMoves.push({ x, y: i });
		}

		return getSpaceIds(possibleMoves);
	}
}

module.exports = Rook;
