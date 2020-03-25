const chalk = require("chalk");
const { p } = require("./pieces");

const board = [
	[p.w.rk, p.w.kn, p.w.bi, p.w.kg, p.w.qn, p.w.bi, p.w.kn, p.w.rk],
	[p.w.pw, p.w.pw, p.w.pw, p.w.pw, p.w.pw, p.w.pw, p.w.pw, p.w.pw],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[p.b.pw, p.b.pw, p.b.pw, p.b.pw, p.b.pw, p.b.pw, p.b.pw, p.b.pw],
	[p.b.rk, p.b.kn, p.b.bi, p.b.kg, p.b.qn, p.b.bi, p.b.kn, p.b.rk]
];

const capturedPieces = {
	w: [p.w.pw, p.w.bi, p.w.pw, p.w.pw],
	b: [p.b.rk, p.b.pw, p.b.pw, p.b.bi]
};

const blackSpace = piece => {
	return piece ? chalk.bgBlack(piece) : chalk.bgBlack("  ");
};

const whiteSpace = piece => {
	return piece ? chalk.bgBlackBright(piece) : chalk.bgBlackBright("  ");
};

const buildRow = (rowNum, piecesInRow) => {
	let row = "";
	for (let i = 0; i < 8; i++) {
		if (rowNum % 2) {
			if (i % 2) row += whiteSpace(piecesInRow[i]);
			else row += blackSpace(piecesInRow[i]);
		} else {
			if (i % 2) row += blackSpace(piecesInRow[i]);
			else row += whiteSpace(piecesInRow[i]);
		}
	}
	return row;
};

const buildInitialBoard = () => {
	for (let i = 0; i < board.length; i++) {
		console.log("       " + buildRow(i, board[i]));
	}
};

const showCapturedPieces = () => {
	let white = "White: ";
	let black = "Black: ";
	for (let i = 0; i < capturedPieces.w.length; i++) {
		white += capturedPieces.w[i];
	}
	for (let i = 0; i < capturedPieces.b.length; i++) {
		black += capturedPieces.b[i];
	}
	console.log("");
	console.log("Pieces Captured");
	console.log(white);
	console.log(black);
};

console.log("");
console.log("===============================");
console.log("     Welcome to cli-chess!     ");
console.log("===============================");
console.log("");
buildInitialBoard();
showCapturedPieces();
