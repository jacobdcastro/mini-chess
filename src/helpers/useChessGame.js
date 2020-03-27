const React = require("react");
const Game = require("../models/game");

const useChessGame = () => {
	const [game] = React.useState(new Game());

	React.useEffect(() => {}, [
		game.history,
		game.player2.name,
		game.player1.name
	]);

	return game;
};

module.exports = useChessGame;
