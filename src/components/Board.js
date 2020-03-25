const React = require("react");
const { Box } = require("ink");
const { GameContext } = require("./GameContext");
const importJsx = require("import-jsx");

const Row = importJsx("./Row");

const Board = () => {
	const { board } = React.useContext(GameContext);

	return (
		<Box flexDirection="column" alignItems="center">
			{board.map((row, i) => {
				return <Row key={i} rowIndex={i} spaces={row} />;
			})}
		</Box>
	);
};

module.exports = Board;
