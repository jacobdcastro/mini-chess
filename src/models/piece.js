const getSpaceId = require("../helpers/getSpaceId");

class Piece {
	constructor(isWhite, position, imgW, imgB) {
		this.isWhite = isWhite;
		this.position = position;
		this.position._id = getSpaceId(position.y, position.x);
		this.isCaptured = false;
		this.icon = isWhite ? imgW : imgB;
		this.capture = this.capture;
		this.move = this.move;
	}

	capture() {
		this.isCaptured = true;
	}

	move(newCoords) {
		this.position = newCoords;
		if (this._id.toLowerCase() === "p") this.firstMove = false;
	}
}

module.exports = Piece;
