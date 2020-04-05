// @ts-nocheck
import React from 'react';
import Game from '../models/game';

// player, move, capture, etc. for useReducer
enum GameChange {}

// TODO convert to useReducer
const useChessGame = () => {
  const [game, setGame] = React.useState(new Game());
  return { game, setGame };
};

export default useChessGame;
