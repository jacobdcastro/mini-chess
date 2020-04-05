import * as React from 'react';
import { Box, Color, useInput } from 'ink';
import Move from '../models/move';
import App from './App';
import {
  moveCursor,
  cursorDidMove,
  highlightPossibleMoves,
  moveCursorOnPossibleMoves,
} from '../helpers/cursorActions';
import botMovePiece from '../helpers/botAI';

import Row from './Row';

const Board = () => {
  const game: any = React.useContext(App.GameContext);
  const { player, setPlayer, player2 } = React.useContext(App.PlayerContext);
  const { board, pieces, setGame, isWhiteTurn } = game;
  const [selectedPossibleMoves, setSelectedPossibleMoves] = React.useState([]);
  const [selectedPiece, setSelectedPiece] = React.useState({});
  const allPieces = pieces.active.black.concat(pieces.active.white);
  const curPos = player.cursorPosition;

  const updateStateAfterMove = newGameData => {
    setGame({ ...game, ...newGameData }); // set game state
    setSelectedPiece({}); // reset selected state
    setSelectedPossibleMoves([]); //reset selected state
  };

  const movePiece = (piece, newCoords) => {
    const move = new Move(board, piece, newCoords);
    const newGameData = game.updateGame(move);
    updateStateAfterMove(newGameData);
  };

  const initBotMove = () => {
    botMovePiece(board, pieces, player2, movePiece);
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (!isWhiteTurn) initBotMove();
    }, 500);
  }, [isWhiteTurn]);

  // ? listener for user keypresses
  useInput((input, key) => {
    // move cursor w/ arrow keys && wasd
    if (selectedPossibleMoves.length === 0) {
      setPlayer({
        ...player,
        cursorPosition: moveCursor(input, key, player),
      });
    } else {
      moveCursorOnPossibleMoves(selectedPossibleMoves, player, setPlayer, key);
    }

    // reset possible moves array if cursor is moved after piece selection
    if (selectedPossibleMoves.length > 0 && key.return) {
      let selectedPieceData;
      let selectedPieceNewCoords;
      if (player.color === 'w') {
        selectedPieceData = pieces.active.white.find(
          p => p._id === selectedPiece._id
        );
        selectedPieceNewCoords = { x: curPos.x, y: curPos.y };
      } else {
        selectedPieceData = pieces.active.black.find(
          p => p._id === selectedPiece._id
        );
        selectedPieceNewCoords = { x: curPos.x, y: curPos.y };
      }
      movePiece(selectedPieceData, selectedPieceNewCoords);
    } else if (key.return) {
      // find and set selected piece in state
      const selectedSpace = board[curPos.y][curPos.x];

      if (selectedSpace.piece) {
        const piece = allPieces.find(p => p._id === selectedSpace.piece._id);
        setSelectedPiece(piece);
      }

      highlightPossibleMoves(
        pieces,
        player,
        setPlayer,
        setSelectedPossibleMoves,
        board
      );
    }
  });

  const displayBoard = () => {
    let rowsData: object[] = [];
    // if player is playing as white, flip board
    // so white shows at bottom
    if (player.color === 'w') {
      for (let i = 7; i >= 0; i--) {
        rowsData.push({
          selectedPossibleMoves,
          spaces: board[i],
          key: i,
          rowIndex: i,
        });
      }
    } else {
      for (let i = 0; i < 8; i++) {
        rowsData.push({
          selectedPossibleMoves,
          spaces: board[i],
          key: i,
          rowIndex: i,
        });
      }
    }
    return rowsData;
  };

  const showCoordinates = (type: number) => {
    let elements = [1, 2, 3, 4, 5, 6, 7];
    if (type) return elements;
    else return elements.reverse();
  };

  return (
    <Box marginRight={3} flexDirection="column">
      <Box flexDirection="row">
        <Box flexDirection="column-reverse" alignItems="center" marginRight={1}>
          {showCoordinates(1).map(c => (
            <Color key={c} cyan>
              {c}
            </Color>
          ))}
        </Box>
        <Box flexDirection="column" alignItems="center">
          {displayBoard().map(rowProps => (
            <Row {...rowProps} />
          ))}
        </Box>
      </Box>
      <Box flexDirection="row" marginLeft={1.5}>
        {showCoordinates(0).map(c => (
          <Color key={c} cyan>
            {' '}
            {String.fromCharCode(97 + c)}
          </Color>
        ))}
      </Box>
    </Box>
  );
};

export default Board;
