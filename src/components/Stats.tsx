// @ts-nocheck
import * as React from 'react';
import { Box, Text, Color } from 'ink';
import { PlayerContext, GameContext } from './App';
import getSpaceId from '../helpers/getSpaceId';

// box props
const fdc = { flexDirection: 'column', width: 16 };

const Stats = () => {
  const { player, player2 } = React.useContext(PlayerContext);
  const { pieces } = React.useContext(GameContext);

  return (
    <Box {...fdc}>
      <Box {...fdc}>
        <Text>{player.name}</Text>
        <Text>
          <Color green>Time:</Color> 05:00:00
        </Text>
        <Text>
          <Color green>Cursor:</Color>{' '}
          {getSpaceId(player.cursorPosition.y, player.cursorPosition.x)}
        </Text>
        <Box flexDirection="row">
          <Text>
            <Color green>Captured Pieces:</Color>
          </Text>
          <Box>
            {pieces.captured.white.map(p => {
              return <Text>{p.icon}</Text>;
            })}
          </Box>
        </Box>
      </Box>
      <Box flexDirection="row">
        <Text>====================</Text>
      </Box>
      <Box {...fdc}>
        <Text>{player2.name}</Text>
        <Text>
          <Color green>Time:</Color> 05:00:00
        </Text>
        <Text>
          <Color green>Cursor:</Color>{' '}
          {getSpaceId(player2.cursorPosition.y, player2.cursorPosition.x)}
        </Text>
        <Box>
          <Text>
            <Color green>Captured Pieces:</Color>
          </Text>
          <Box flexDirection="row">
            {pieces.captured.black.map(p => {
              return <Text>{p.icon}</Text>;
            })}
          </Box>
        </Box>
        {/* <Text>====================================================</Text> */}
        {/* <Text></Text> */}
      </Box>
    </Box>
  );
};

export default Stats;
