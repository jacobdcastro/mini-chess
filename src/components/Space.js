const React = require("react");
const { Color } = require("ink");

const Space = ({ space, spaceColor }) => {
	return (
		<Color bgKeyword={spaceColor}>
			{space.piece !== null ? space.piece : `  `}
		</Color>
	);
};

module.exports = Space;
