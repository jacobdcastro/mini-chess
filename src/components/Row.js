const React = require("react");
const { Text } = require("ink");
const importJsx = require("import-jsx");

const Space = importJsx("./Space");

const Row = ({ rowIndex, spaces }) => {
	const setColor = i => {
		if (rowIndex === 0 || rowIndex % 2 === 0) {
			if (i % 2) return "gray";
			else return "black";
		} else {
			if (i % 2) return "black";
			else return "gray";
		}
	};

	return (
		<Text>
			{spaces.map((space, i) => {
				return <Space key={space._id} space={space} spaceColor={setColor(i)} />;
			})}
		</Text>
	);
};

module.exports = Row;
