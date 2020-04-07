// @ts-nocheck
import React from 'react';
import Game from '../models/game';

// player, move, capture, etc. for useReducer
enum GameChange {}

export interface GameHook {
  game: Game;
  setGame: () => {};
}

// TODO convert to useReducer
const useChessGame = (): GameHook => {
  const [game, setGame] = React.useState(new Game());
  return { game, setGame };
};

export default useChessGame;
