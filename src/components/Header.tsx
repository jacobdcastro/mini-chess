// @ts-nocheck
import * as React from 'react';
import { Box, Text, Color, useInput } from 'ink';
import Outline from 'ink-box';
import { InputKey } from '../helpers/interfaces';

const Header = () => {
  const [showInstructions, toggleShowInstructions] = React.useState<boolean>(
    true
  );

  useInput((input, key: InputKey) => {
    if (key.return && key.meta) toggleShowInstructions(false);
  });

  return (
    <>
      <Outline borderStyle="round" borderColor="red" float="center" padding={1}>
        <Text>
          Welcome to <Color green>cli-chess</Color>!
        </Text>
      </Outline>
      {showInstructions ? (
        <Box flexDirection="column" alignItems="center" marginBottom={2}>
          <Text underline>INSTRUCTIONS</Text>
          <Text>
            Move cursor (<Color bgKeyword="blue">{`  `}</Color>): Arrow Keys OR
            "wasd"
          </Text>
          <Text>Select piece to move: Enter</Text>
          <Text>Confirm space to move piece to: Enter</Text>
          {/* <Text>Unselect piece to move: Shift + Enter</Text> */}
          {/* <Text>Hide Instructions: Alt/Cmd + Enter</Text> */}
        </Box>
      ) : (
        <Text>Show Instructions: Alt/Cmd + Enter</Text>
      )}
    </>
  );
};

export default Header;
