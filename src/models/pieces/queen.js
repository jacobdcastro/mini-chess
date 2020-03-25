const Piece = require("../piece");

class Queen extends Piece {
	constructor(isWhite, position) {
		super(isWhite, position, "♛ ", "♕ ");
		this._id = isWhite ? "Q" : "q";
	}

	getPossibleMoves() {
		let possibleMoves = [];
		const { x, y } = this.position;
	}
}

module.exports = Queen;
