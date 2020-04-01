const React = require("react");
const { Box, Text, Color } = require("ink");
const InkBox = require("ink-box");
const App = require("./App");
const getSpaceId = require("../helpers/getSpaceId");

const fdc = { flexDirection: "column", width: 15 };
const fdr = { flexDirection: "row" };

const Stats = () => {
	const { player } = React.useContext(App.PlayerContext);

	return (
		<Box {...fdr}>
			<Box {...fdc}>
				<Text>{player.name}</Text>
				<Text>
					<Color green>Time:</Color> 05:00:00
				</Text>
				<Text>
					<Color green>Cursor:</Color>{" "}
					{getSpaceId(player.cursorPosition.y, player.cursorPosition.x)}
				</Text>
				<Box>
					<Text>
						<Color green>Captured Pieces:</Color>
					</Text>
					<Box></Box>
				</Box>
			</Box>
			<Box flexDirection="column">
				<Text> | </Text>
				<Text> | </Text>
				<Text> | </Text>
				<Text> | </Text>
				<Text> | </Text>
				<Text> | </Text>
				<Text> | </Text>
				<Text> | </Text>
			</Box>
			<Box {...fdc}>
				<Text>{player.name}</Text>
				<Text>
					<Color green>Time:</Color> 05:00:00
				</Text>
				<Text>
					<Color green>Cursor:</Color>{" "}
					{getSpaceId(player.cursorPosition.y, player.cursorPosition.x)}
				</Text>
				<Box>
					<Text>
						<Color green>Captured Pieces:</Color>
					</Text>
					<Box></Box>
				</Box>
			</Box>
		</Box>
	);
};

module.exports = Stats;
