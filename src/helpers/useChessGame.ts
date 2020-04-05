// @ts-nocheck
import React from 'react';
import Game from '../models/game';

// TODO convert to useReducer
const useChessGame = () => {
  const [game, setGame] = React.useState(new Game());
  return { game, setGame };
};

export default useChessGame;
