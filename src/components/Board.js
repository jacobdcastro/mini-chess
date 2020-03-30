const React = require("react");
const { Box, Color, useInput, Text } = require("ink");
const App = require("./App");
const importJsx = require("import-jsx");
const moveCursor = require("../helpers/moveCursor");

const Row = importJsx("./Row");

const Board = () => {
	const { board } = React.useContext(App.GameContext);
	const { player, setPlayer } = React.useContext(App.PlayerContext);

	const flipBoard = () => {
		let rows = [];
		for (let i = 7; i >= 0; i--) {
			const row = board[i];
			rows.push(<Row key={i} rowIndex={i} spaces={row} />);
		}
		return rows;
	};

	useInput((input, key) => {
		setPlayer({
			...player,
			cursorPosition: moveCursor(input, key, player)
		});
	});

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
		<Box flexDirection="column">
			<Box flexDirection="row">
				<Box flexDirection="column-reverse" alignItems="center" marginRight={1}>
					{showCoordinates(1)}
				</Box>
				<Box flexDirection="column" alignItems="center">
					{flipBoard()}
				</Box>
			</Box>
			<Box flexDirection="row" marginLeft={1.5}>
				{showCoordinates(0)}
			</Box>
		</Box>
	);
};

module.exports = Board;
