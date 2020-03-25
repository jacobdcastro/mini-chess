const Piece = require("../piece");

class Knight extends Piece {
	constructor(isWhite, position) {
		super(isWhite, position, "♞ ", "♘ ");
		this._id = isWhite ? "N" : "n";
	}

	getPossibleMoves() {
		let possibleMoves = [];
		const { x, y } = this.position;
	}
}

module.exports = Knight;
