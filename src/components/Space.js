const React = require("react");
const { Color } = require("ink");
const App = require("./App");

const Space = ({ space, defaultSpaceColor }) => {
	const [piece, setPiece] = React.useState(null);
	const { pieces } = React.useContext(App.GameContext);
	const { cursorPosition } = React.useContext(App.PlayerContext);

	React.useEffect(() => {
		const allPieces = pieces.active.black.concat(pieces.active.white);

		if (space.piece) {
			const p = allPieces.find(p => p._id === space.piece._id);
			setPiece(p);
		} else {
			setPiece(null);
		}
	}, [space.piece]);

	const setActionColor = () => "blue";

	return (
		<Color
			bgKeyword={
				cursorPosition === space.position ? setActionColor() : defaultSpaceColor
			}
			bgKeyword={defaultSpaceColor}
		>
			{piece ? piece.icon : `  `}
		</Color>
	);
};

module.exports = Space;
