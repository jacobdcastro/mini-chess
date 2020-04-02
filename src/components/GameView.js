const React = require("react");
const importJsx = require("import-jsx");
const { Box, useInput } = require("ink");

const Board = importJsx("./Board");
const Stats = importJsx("./Stats");
const SetupQuestions = importJsx("./SetupQuestions");

const GameView = ({ player }) => {
	useInput((value, key) => {});

	// if (player) {
	return (
		<Box justifyContent="center" height={15}>
			<Board />
			<Stats />
		</Box>
	);
	// } else {
	// 	return (
	// 		<Box height={15}>
	// 			<SetupQuestions />
	// 		</Box>
	// 	);
	// }
};

module.exports = GameView;
