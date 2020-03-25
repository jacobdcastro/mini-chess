const React = require("react");
const importJsx = require("import-jsx");
const { Box } = require("ink");

const Board = importJsx("./Board");

const p = {
	w: {
		pw: "♟ ",
		bi: "♝ ",
		rk: "♜ ",
		kn: "♞ ",
		kg: "♚ ",
		qn: "♛ "
	},
	b: {
		pw: "♙ ",
		bi: "♗ ",
		rk: "♖ ",
		kn: "♘ ",
		kg: "♔ ",
		qn: "♕ "
	}
};

const board = [
	[
		{ id: "a1", piece: p.w.rk, selected: false },
		{ id: "b1", piece: p.w.kn, selected: false },
		{ id: "c1", piece: p.w.bi, selected: false },
		{ id: "d1", piece: p.w.kg, selected: false },
		{ id: "e1", piece: p.w.qn, selected: false },
		{ id: "f1", piece: p.w.bi, selected: false },
		{ id: "g1", piece: p.w.kn, selected: false },
		{ id: "h1", piece: p.w.rk, selected: false }
	],
	[
		{ id: "a2", piece: p.w.pw, selected: false },
		{ id: "b2", piece: p.w.pw, selected: false },
		{ id: "c2", piece: p.w.pw, selected: false },
		{ id: "d2", piece: p.w.pw, selected: false },
		{ id: "e2", piece: p.w.pw, selected: false },
		{ id: "f2", piece: p.w.pw, selected: false },
		{ id: "g2", piece: p.w.pw, selected: false },
		{ id: "h2", piece: p.w.pw, selected: false }
	],
	[
		{ id: "a3", piece: null, selected: false },
		{ id: "b3", piece: null, selected: false },
		{ id: "c3", piece: null, selected: false },
		{ id: "d3", piece: null, selected: false },
		{ id: "e3", piece: null, selected: false },
		{ id: "f3", piece: null, selected: false },
		{ id: "g3", piece: null, selected: false },
		{ id: "h3", piece: null, selected: false }
	],
	[
		{ id: "a4", piece: null, selected: false },
		{ id: "b4", piece: null, selected: false },
		{ id: "c4", piece: null, selected: false },
		{ id: "d4", piece: null, selected: false },
		{ id: "e4", piece: null, selected: false },
		{ id: "f4", piece: null, selected: false },
		{ id: "g4", piece: null, selected: false },
		{ id: "h4", piece: null, selected: false }
	],
	[
		{ id: "a5", piece: null, selected: false },
		{ id: "b5", piece: null, selected: false },
		{ id: "c5", piece: null, selected: false },
		{ id: "d5", piece: null, selected: false },
		{ id: "e5", piece: null, selected: false },
		{ id: "f5", piece: null, selected: false },
		{ id: "g5", piece: null, selected: false },
		{ id: "h5", piece: null, selected: false }
	],
	[
		{ id: "a6", piece: null, selected: false },
		{ id: "b6", piece: null, selected: false },
		{ id: "c6", piece: null, selected: false },
		{ id: "d6", piece: null, selected: false },
		{ id: "e6", piece: null, selected: false },
		{ id: "f6", piece: null, selected: false },
		{ id: "g6", piece: null, selected: false },
		{ id: "h6", piece: null, selected: false }
	],
	[
		{ id: "a7", piece: p.b.pw, selected: false },
		{ id: "b7", piece: p.b.pw, selected: false },
		{ id: "c7", piece: p.b.pw, selected: false },
		{ id: "d7", piece: p.b.pw, selected: false },
		{ id: "e7", piece: p.b.pw, selected: false },
		{ id: "f7", piece: p.b.pw, selected: false },
		{ id: "g7", piece: p.b.pw, selected: false },
		{ id: "h7", piece: p.b.pw, selected: false }
	],
	[
		{ id: "a8", piece: p.b.rk, selected: false },
		{ id: "b8", piece: p.b.kn, selected: false },
		{ id: "c8", piece: p.b.bi, selected: false },
		{ id: "d8", piece: p.b.kg, selected: false },
		{ id: "e8", piece: p.b.qn, selected: false },
		{ id: "f8", piece: p.b.bi, selected: false },
		{ id: "g8", piece: p.b.kn, selected: false },
		{ id: "h8", piece: p.b.rk, selected: false }
	]
];

const Game = () => {
	const [gameState, setGameState] = React.useState({
		board,
		capturedPieces: {
			w: [],
			b: []
		}
	});

	return (
		<Box alignItems="center" justifyContent="center">
			<Board boardState={gameState.board} />
		</Box>
	);
};

module.exports = Game;
