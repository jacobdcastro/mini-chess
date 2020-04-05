import * as React from 'react';
import { Text } from 'ink';
import SpaceType from '../models/space';
import Space from './Space';
import { Position } from '../helpers/interfaces';

interface RowProps {
  rowIndex: number;
  spaces: SpaceType[];
  selectedPossibleMoves: Position[];
}

const Row = ({ rowIndex, spaces, selectedPossibleMoves }: RowProps) => {
  const setColor = (i: number) => {
    if (rowIndex === 0 || rowIndex % 2 === 0) {
      if (i % 2) return 'gray';
      else return 'black';
    } else {
      if (i % 2) return 'black';
      else return 'gray';
    }
  };

  return (
    <Text>
      {spaces.map((space: SpaceType, i: number) => {
        return (
          <Space
            key={space._id}
            space={space}
            defaultSpaceColor={setColor(i)}
            selectedPossibleMoves={selectedPossibleMoves}
          />
        );
      })}
    </Text>
  );
};

export default Row;
