const React = require('react');
const { Box, Text, Color } = require('ink');
const InkBox = require('ink-box');
const App = require('./App');
const getSpaceId = require('../helpers/getSpaceId');

const fdc = { flexDirection: 'column', width: 16 };
const fdr = { flexDirection: 'row' };

const Stats = () => {
  const { player, player2 } = React.useContext(App.PlayerContext);
  const { pieces } = React.useContext(App.GameContext);

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

module.exports = Stats;
