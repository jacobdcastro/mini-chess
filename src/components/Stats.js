const React = require("react");
const { Box, Text, Color } = require("ink");
const InkBox = require("ink-box");
const App = require("./App");

const fdc = { flexDirection: "column", width: 8 };
const fdr = { flexDirection: "row" };

const Stats = () => {
	const { player1, player2 } = React.useContext(App.GameContext);
	console.log("P1", player1);
	console.log("P2", player2);

	return (
		<Box {...fdr}>
			<Box {...fdc}>
				<Text>Player 1</Text>
				<Text>
					<Color green>Time:</Color> 05:00:00
				</Text>
			</Box>
			<Text> | </Text>
			<Box {...fdc}>
				<Text>Player 2</Text>
				<Text>
					<Color green>Time:</Color> 05:00:00
				</Text>
			</Box>
		</Box>
	);
};

module.exports = Stats;
