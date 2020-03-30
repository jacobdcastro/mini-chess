const getSpaceId = require("../helpers/getSpaceId");

class Space {
	constructor(y, x, piece) {
		this._id = getSpaceId(y, x);
		this.position = { x, y };
		this.piece = piece ? piece : null;
	}

	setPiece(piece) {
		this.piece = piece;
	}
}

module.exports = Space;
