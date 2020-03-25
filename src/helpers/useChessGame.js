const React = require('react');

const useGame = () => {
	const [board, setBoard] = React.useState();
	const [players, setPlayers] = React.useState();

	React.useEffect(() => {
		console.log('oi!');
	}, []);

	return;
};

module.exports = useGame;
