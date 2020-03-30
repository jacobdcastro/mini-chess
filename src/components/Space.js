const React = require("react");
const { Color } = require("ink");
const App = require("./App");

const Space = ({ space, defaultSpaceColor }) => {
	const [piece, setPiece] = React.useState(null);
	const { pieces } = React.useContext(App.GameContext);
	const { player } = React.useContext(App.PlayerContext);
	const allPieces = pieces.active.black.concat(pieces.active.white);

	React.useEffect(() => {
		if (space.piece) {
			const p = allPieces.find(p => p._id === space.piece._id);
			setPiece(p);
		} else {
			setPiece(null);
		}
	}, [space.piece]);

	const setBgColor = () => {
		if (
			space.position.x === player.cursorPosition.x &&
			space.position.y === player.cursorPosition.y
		) {
			return "blue";
		} else {
			return defaultSpaceColor;
		}
	};

	return <Color bgKeyword={setBgColor()}>{piece ? piece.icon : `  `}</Color>;
};

module.exports = Space;
