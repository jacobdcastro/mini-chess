const React = require("react");
const { Text, Color } = require("ink");
const Box = require("ink-box");

const Header = () => {
	return (
		<Box borderStyle="round" borderColor="red" float="center" padding={1}>
			<Text>
				Welcome to <Color green>cli-chess</Color>!
			</Text>
		</Box>
	);
};

module.exports = Header;
