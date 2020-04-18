// @ts-nocheck
import * as React from 'react';
import { Color } from 'ink';
import { GameContext, PlayerContext } from './App';
import { Position, AnyPiece } from '../helpers/interfaces';
import Piece from '../models/piece';
import Pieces from '../models/allPieces';
import SpaceType from '../models/space';

interface SpaceProps {
  space: SpaceType;
  defaultSpaceColor: 'gray' | 'black';
  selectedPossibleMoves: Position[];
}

const Space = ({
  space,
  defaultSpaceColor,
  selectedPossibleMoves,
}: SpaceProps) => {
  const [piece, setPiece] = React.useState(null);
  // TODO fix any types
  const { pieces } = React.useContext<any>(GameContext);
  const { player } = React.useContext<any>(PlayerContext);
  const allPieces: Piece[] = pieces.active.black.concat(pieces.active.white);

  // check if space if a possible move for selected piece
  const isPossibleMove = selectedPossibleMoves.find(
    m => m.x === space.position.x && m.y === space.position.y
  );

  React.useEffect(() => {
    if (space.piece) {
      const p = allPieces.find(p => p._id === space.piece._id);
      setPiece(p);
    } else {
      setPiece(null);
    }
  }, [space.piece]);

  const setBgColor = () => {
    if (
      space.position.x === player.cursorPosition.x &&
      space.position.y === player.cursorPosition.y
    ) {
      return 'blue';
    } else if (isPossibleMove) {
      return 'cyan';
    } else {
      return defaultSpaceColor;
    }
  };

  const setSpaceContents = () => {
    if (piece) return piece.icon;
    else return '  ';
  };

  return <Color bgKeyword={setBgColor()}>{setSpaceContents()}</Color>;
};

export default Space;
