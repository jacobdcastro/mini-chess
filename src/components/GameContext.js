const React = require("react");
const useChessGame = require("../helpers/useChessGame");

const GameContext = React.createContext();

const GameContextParent = ({ children }) => {
	const game = useChessGame();

	return (
		<>
			<GameContext.Provider value={game}>{children}</GameContext.Provider>
		</>
	);
};

exports.GameContext = GameContext;
exports.GameContextParent = GameContextParent;
