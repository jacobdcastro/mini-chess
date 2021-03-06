// @ts-nocheck
import * as React from 'react';
import { PlayerContext } from './App';
import { Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';
import SelectInput from 'ink-select-input';

const SetupQuestions = () => {
  const { player1, player2, setPlayer } = React.useContext(PlayerContext);
  const [playerInfo, setPlayerInfo] = React.useState({
    name: '',
    color: '',
  });
  const [qNum, setQNum] = React.useState(0);

  const nextQuestion = () => setQNum(qNum + 1);

  const handleTextChange = value => {
    setPlayerInfo({ ...playerInfo, name: value });
  };

  const handleSelectSubmit = ({ value }) => {
    setPlayerInfo({ ...playerInfo, color: value });
    handleConfirmInfo(true);
  };

  const handleConfirmInfo = isConfirmed => {
    const { color } = playerInfo;
    if (isConfirmed) {
      // set player in app state
      if (color === 'w') setPlayer(player1);
      if (color === 'b') setPlayer(player2);
      else setPlayer(player1);
      nextQuestion();
    } else {
      setQNum(0);
    }
  };

  return (
    <Box flexDirection="column">
      <Text>Ready to start a game of chess?</Text>
      {qNum >= 0 && (
        <>
          <Box marginTop={1}>
            <Text>Enter your name: </Text>
            <TextInput.default
              value={playerInfo.name}
              onChange={handleTextChange}
              onSubmit={() => nextQuestion()}
            />
          </Box>
        </>
      )}

      {qNum >= 1 && (
        <>
          <Box marginTop={1}>
            <Text>
              Which color would you like to play as? (remember, white goes
              first!)
            </Text>
          </Box>
          <Box>
            <SelectInput.default
              items={[
                { label: 'White', value: 'w' },
                { label: 'Black', value: 'b' },
              ]}
              onSelect={handleSelectSubmit}
            />
          </Box>
        </>
      )}
      {/* {qNum >= 2 && (
				<>
					<Box>
						<Text>Would you like to play against a human or a bot?</Text>
					</Box>
					<SelectInput.default
						items={[
							{ label: "Human", value: true },
							{ label: "Bot AI", value: false }
						]}
						onSelect={handleSelectSubmit}
					/>
				</>
			)} */}
    </Box>
  );
};

export default SetupQuestions;
