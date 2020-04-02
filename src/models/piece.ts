import getSpaceId from "../helpers/getSpaceId";
import Position from "../@types/Position";

class Piece {
	constructor(
		public isWhite: Boolean,
		public position: Position,
		imgW: String,
		imgB: String,
		public value: Number,
		public hasMoved?: Boolean,
		public icon?: String,
		public isCaptured?: Boolean
	) {
		this.position._id = getSpaceId(position.y, position.x);
		this.isCaptured = false;
		this.icon = isWhite ? imgW : imgB;
		this.capture = this.capture;
		this.hasMoved = false;
		this.move = this.move;
		this.value = value;
	}

	capture() {
		this.isCaptured = true;
		this.position = undefined;
		return this;
	}

	move(newCoords: Position) {
		const { x, y } = newCoords;
		this.position = { x, y, _id: getSpaceId(y, x) };
		this.hasMoved = true;
		return this;
	}
}

export default Piece;
