// @ts-nocheck
import React from 'react';
import Game from '../models/game';

// const data = new Game();

const useChessGame = () => {
  const [game, setGame] = React.useState(new Game());

  // React.useEffect(() => {
  // 	setGame({ ...game, started: new Date() });
  // 	console.log(game);
  // }, []);

  // const [players, setPlayers] = React.useState({
  // 	player1: game.player1,
  // 	player2: game.player2,
  // 	turn: game.turn
  // });

  // const [board, setBoard] = React.useState({
  // 	player1: game.player1,
  // 	player2: game.player2,
  // 	turn: game.turn
  // });

  return { game, setGame };
};

export default useChessGame;
