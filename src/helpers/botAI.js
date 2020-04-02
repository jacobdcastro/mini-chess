const Move = require("../models/move");

const examineAllPossibleMoves = (board, pieces, player) => {
	let allMovablePieces = [];
	const allColorPieces =
		player.color === "w" ? pieces.active.white : pieces.active.black;

	allColorPieces.forEach(p => {
		const possibleMoves = p.getPossibleMoves(board);
		if (possibleMoves.length > 0) {
			allMovablePieces.push({ piece: p, possibleMoves });
		}
	});

	return allMovablePieces;
};

const chooseRandomMove = allMovablePieces => {
	const ran = Math.floor(Math.random() * allMovablePieces.length);
	const selectedPiece = allMovablePieces[ran];
	const ran2 = Math.floor(Math.random() * selectedPiece.possibleMoves.length);
	const selectedMove = selectedPiece.possibleMoves[ran2];
	return { selectedPiece: selectedPiece.piece, newCoords: selectedMove };
};

const botMovePiece = (b, pc, pl, movePiece) => {
	const allMovablePieces = examineAllPossibleMoves(b, pc, pl);
	const { selectedPiece, newCoords } = chooseRandomMove(allMovablePieces);

	movePiece(selectedPiece, newCoords);
};

module.exports = botMovePiece;
