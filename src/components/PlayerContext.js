const React = require("react");
const { GameContext } = require("./GameContext");

const PlayerContext = React.createContext();

const PlayerContextWrapper = ({ children }) => {
	const { player1, player2 } = React.useContext(GameContext);

	const chooseSide = color => {
		const p = setplayer(p);
	};

	const [player, setplayer] = React.useState({
		chooseSide
	});

	return <PlayerContext.Provider>{children}</PlayerContext.Provider>;
};
