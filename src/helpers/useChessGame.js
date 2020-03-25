const React = require("react");
const Game = require("../models/game");

const useChessGame = () => {
	const [game] = React.useState(new Game());

	React.useEffect(() => {}, [game.history]);

	return game;
};

module.exports = useChessGame;
