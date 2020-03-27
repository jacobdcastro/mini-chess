const React = require("react");
const { Box, Color } = require("ink");
const App = require("./App");
const importJsx = require("import-jsx");

const Row = importJsx("./Row");

const Board = () => {
	const { board } = React.useContext(App.GameContext);
	const player = React.useContext(App.PlayerContext);

	const showCoordinates = type => {
		if (type) {
			const yAxisElements = [];
			for (let i = 1; i <= 8; i++) {
				yAxisElements.push(<Color cyan>{i}</Color>);
			}
			return yAxisElements;
		} else {
			const xAxisElements = [];
			for (let i = 0; i < 8; i++) {
				xAxisElements.push(
					<Color cyan>
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
					{board.map((row, i) => {
						return <Row key={i} rowIndex={i} spaces={row} />;
					})}
				</Box>
			</Box>
			<Box flexDirection="row" marginLeft={1.5}>
				{showCoordinates(0)}
			</Box>
		</Box>
	);
};

module.exports = Board;
