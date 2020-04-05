// @ts-nocheck
'use strict';
import * as React from 'react';
import useChessGame from '../helpers/useChessGame';
import Header from './Header';
import GameView from './GameView';

// create global state context
export const GameContext = React.createContext({});
export const PlayerContext = React.createContext({});

const App = () => {
  const { game, setGame } = useChessGame();

  const { player1, player2 } = game;
  const [player, setPlayer] = React.useState(player1);

  return (
    <>
      <Header />

      <GameContext.Provider value={{ ...game, setGame }}>
        <PlayerContext.Provider value={{ player1, player2, setPlayer, player }}>
          <GameView player={player} />
        </PlayerContext.Provider>
      </GameContext.Provider>
    </>
  );
};

export default App;
