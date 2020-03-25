const React = require("react");
const { Box } = require("ink");
const importJsx = require("import-jsx");

const Row = importJsx("./Row");

const Board = ({ boardState }) => {
	return (
		<Box flexDirection="column" alignItems="center">
			{boardState.map((row, i) => {
				return <Row key={i} rowIndex={i} spaces={row} />;
			})}
		</Box>
	);
};

module.exports = Board;
