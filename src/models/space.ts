const getSpaceId = require("../helpers/getSpaceId");
import Position from "../@types/Position";
import PieceRef from "../@types/PieceRef";

class Space {
	constructor(
		y: Number,
		x: Number,
		public piece: PieceRef,
		public position: Position,
		public _id?: String
	) {
		this._id = getSpaceId(y, x);
		this.position = { x, y };
		this.piece = piece ? piece : null;
	}

	setPiece(piece: PieceRef) {
		this.piece = piece;
	}
}

module.exports = Space;
