import * as React from 'react';
import { Box, useInput } from 'ink';

import Board from './Board';
import Stats from './Stats';
import SetupQuestions from './SetupQuestions';

const GameView = ({ player }) => {
  useInput((value, key) => {});

  // if (player) {
  return (
    <Box justifyContent="center" height={15}>
      <Board />
      <Stats />
    </Box>
  );
  // } else {
  // 	return (
  // 		<Box height={15}>
  // 			<SetupQuestions />
  // 		</Box>
  // 	);
  // }
};

export default GameView;
