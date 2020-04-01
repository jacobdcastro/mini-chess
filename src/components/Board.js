const React = require("react");
const { Box, Color, useInput } = require("ink");
const importJsx = require("import-jsx");
const App = require("./App");
const {
	moveCursor,
	cursorDidMove,
	highlightPossibleMoves,
	moveCursorOnPossibleMoves
} = require("../helpers/cursorActions");

const Row = importJsx("../components/Row");

const Board = () => {
	const { board, pieces } = React.useContext(App.GameContext);
	const { player, setPlayer } = React.useContext(App.PlayerContext);
	const [selectedPossibleMoves, setSelectedPossibleMoves] = React.useState([]);

	// ? listener for user keypresses
	useInput((input, key) => {
		// move cursor w/ arrow keys && wasd
		if (selectedPossibleMoves.length === 0) {
			setPlayer({
				...player,
				cursorPosition: moveCursor(input, key, player)
			});
		} else {
			moveCursorOnPossibleMoves(selectedPossibleMoves, player, setPlayer, key);
		}

		// reset possible moves array if cursor is moved after piece selection
		if (selectedPossibleMoves.length > 0 && key.return) {
			setSelectedPossibleMoves([]);
		} else if (key.return) {
			highlightPossibleMoves(
				pieces,
				player,
				setPlayer,
				setSelectedPossibleMoves,
				board
			);
		}
	});

	const displayBoard = () => {
		let rows = [];

		// if player is playing as white, flip board
		// so white shows at bottom
		if (player.color === "w") {
			for (let i = 7; i >= 0; i--) {
				// rows.push(rowComponent(i, board, selectedPossibleMoves));
				rows.push(
					<Row
						selectedPossibleMoves={selectedPossibleMoves}
						key={i}
						rowIndex={i}
						spaces={board[i]}
					/>
				);
			}
		} else {
			for (let i = 0; i < 8; i++) {
				rows.push(
					<Row
						selectedPossibleMoves={selectedPossibleMoves}
						key={i}
						rowIndex={i}
						spaces={board[i]}
					/>
				);
			}
		}

		return rows;
	};

	const showCoordinates = type => {
		if (type) {
			const yAxisElements = [];
			for (let i = 1; i <= 8; i++) {
				yAxisElements.push(
					<Color key={i} cyan>
						{i}
					</Color>
				);
			}
			return yAxisElements;
		} else {
			const xAxisElements = [];
			for (let i = 0; i < 8; i++) {
				xAxisElements.push(
					<Color key={i} cyan>
						{` `}
						{String.fromCharCode(97 + i)}
					</Color>
				);
			}
			return xAxisElements;
		}
	};

	return (
		<Box marginRight={3} marginLeft={3} flexDirection="column">
			<Box flexDirection="row">
				<Box flexDirection="column-reverse" alignItems="center" marginRight={1}>
					{showCoordinates(1)}
				</Box>
				<Box flexDirection="column" alignItems="center">
					{displayBoard()}
				</Box>
			</Box>
			<Box flexDirection="row" marginLeft={1.5}>
				{showCoordinates(0)}
			</Box>
		</Box>
	);
};

module.exports = Board;
