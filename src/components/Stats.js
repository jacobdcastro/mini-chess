const React = require("react");
const { Box, Text, Color } = require("ink");
const InkBox = require("ink-box");
const App = require("./App");
const getSpaceId = require("../helpers/getSpaceId");

const fdc = { flexDirection: "column", width: 18 };
const fdr = { flexDirection: "row" };

const Stats = () => {
	const { player1, player2 } = React.useContext(App.GameContext);
	const pos1 = player1.cursorPosition;
	const pos2 = player2.cursorPosition;

	return (
		<Box {...fdr}>
			<Box {...fdc}>
				<Text>Player 1</Text>
				<Text>
					<Color green>Time:</Color> 05:00:00
				</Text>
				<Text>
					<Color green>Cursor:</Color>{" "}
					{getSpaceId(player1.cursorPosition.y, player1.cursorPosition.x)}
				</Text>
			</Box>
			<Text> | </Text>
			<Box {...fdc}>
				<Text>Player 2</Text>
				<Text>
					<Color green>Time:</Color> 05:00:00
				</Text>
				<Text>
					<Color green>Cursor:</Color>{" "}
					{getSpaceId(player2.cursorPosition.y, player2.cursorPosition.x)}
				</Text>
			</Box>
		</Box>
	);
};

module.exports = Stats;
