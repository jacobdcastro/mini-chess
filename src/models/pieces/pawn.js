const Piece = require("../piece");
const getSpaceIds = require("../../helpers/getSpaceIds");

class Pawn extends Piece {
	constructor(isWhite, position) {
		super(isWhite, position, "♟ ", "♙ ");
		this._id = isWhite ? "P" : "p";
		this.firstMove = true;
		this.getPossibleMoves = this.getPossibleMoves;
	}

	getPossibleMoves(board) {
		let possibleMoves = [];
		const { x, y } = this.position;

		if (this.isWhite) {
			const pos1 = { x, y: y + 2 }; // 2-space move
			const pos2 = { x, y: y + 1 }; // 1-space move
			const pos3 = { x: x + 1, y: y + 1 }; // diagonal capture
			const pos4 = { x: x - 1, y: y + 1 }; // diagonal capture

			if (this.firstMove) {
				const space1 = board[pos1.y][pos1.x];
				if (space1.piece === null) possibleMoves.push(pos1);
			}

			const space2 = board[pos2.y][pos2.x];
			if (space2.piece === null) possibleMoves.push(pos2);

			if (x !== 7) {
				console.log(pos3);
				const space3 = board[pos3.y][pos3.x];
				if (space3.piece !== null && space3.piece.isWhite !== this.isWhite) {
					possibleMoves.push(pos3);
				}
			}

			if (x !== 0) {
				const space4 = board[pos4.y][pos4.x];
				if (space4.piece !== null && space4.piece.isWhite !== this.isWhite) {
					possibleMoves.push(pos4);
				}
			}
		} else {
			const pos1 = { x, y: y - 2 }; // 2-space move
			const pos2 = { x, y: y - 1 }; // 1-space move
			const pos3 = { x: x - 1, y: y - 1 }; // diagonal capture
			const pos4 = { x: x + 1, y: y - 1 }; // diagonal capture

			if (this.firstMove) {
				const space1 = board[pos1.y][pos1.x];
				if (space1.piece === null) possibleMoves.push(pos1);
			}

			const space2 = board[pos2.y][pos2.x];
			if (space2.piece === null) possibleMoves.push(pos2);

			if (x !== 0) {
				const space3 = board[pos3.y][pos3.x];
				if (space3.piece !== null && space3.piece.isWhite !== this.isWhite) {
					possibleMoves.push(pos3);
				}
			}

			if (x !== 7) {
				const space4 = board[pos4.y][pos4.x];
				if (space4.piece !== null && space4.piece.isWhite !== this.isWhite) {
					possibleMoves.push(pos4);
				}
			}
		}

		return getSpaceIds(possibleMoves);
	}
}

module.exports = Pawn;
