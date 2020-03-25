const Piece = require("../piece");

class King extends Piece {
	constructor(isWhite, position) {
		super(isWhite, position, "♚ ", "♔ ");
		this._id = isWhite ? "K" : "k";
		this.hasCastled = false;
	}

	getPossibleMoves() {
		let possibleMoves = [];
		const { x, y } = this.position;
	}
}

module.exports = King;
