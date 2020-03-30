"use strict";
const React = require("react");
const useChessGame = require("../helpers/useChessGame");
const importJsx = require("import-jsx");

const Header = importJsx("./Header");
const GameView = importJsx("./GameView");

// create global state context
const GameContext = React.createContext();
const PlayerContext = React.createContext();

const App = () => {
	const game = useChessGame();
	const [player, setPlayer] = React.useState();
	const { player1, player2 } = game;

	// ! TEMPORARY
	React.useEffect(() => {
		setPlayer(player1);
	}, []);

	return (
		<>
			<Header />

			<GameContext.Provider value={game}>
				<PlayerContext.Provider value={{ player1, player2, setPlayer, player }}>
					<GameView player={player} />
				</PlayerContext.Provider>
			</GameContext.Provider>
		</>
	);
};

exports.GameContext = GameContext;
exports.PlayerContext = PlayerContext;
module.exports = App;
