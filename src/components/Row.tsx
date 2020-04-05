import * as React from 'react';
import { Text } from 'ink';

import Space from './Space';

const Row = ({ rowIndex, spaces, selectedPossibleMoves }) => {
  const setColor = i => {
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
      {spaces.map((space, i) => {
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
