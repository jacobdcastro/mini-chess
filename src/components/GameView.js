const React = require("react");
const importJsx = require("import-jsx");
const { Box } = require("ink");
const Board = importJsx("./Board");

const GameView = () => {
	return (
		<Box alignItems="center" justifyContent="center">
			<Board />
		</Box>
	);
};

module.exports = GameView;
