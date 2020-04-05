// @ts-nocheck
export const moveCursor = (input, key, player) => {
  const { x, y } = player.cursorPosition;

  if (key.upArrow || input === 'w') {
    if (player.color === 'w' && y < 7) return { x, y: y + 1 };
    else if (y > 0) return { x, y: y - 1 };
  }
  if ((key.rightArrow || input === 'd') && x < 7) {
    return { x: x + 1, y };
  }
  if (key.downArrow || input === 's') {
    if (player.color === 'w' && y > 0) return { x, y: y - 1 };
    else if (y < 7) return { x, y: y + 1 };
  }
  if ((key.leftArrow || input === 'a') && x > 0) {
    return { x: x - 1, y };
  }

  return { x, y };
};

export const cursorDidMove = (input, key) => {
  if (
    key.upArrow ||
    key.downArrow ||
    key.leftArrow ||
    key.rightArrow ||
    input === 'w' ||
    input === 'a' ||
    input === 's' ||
    input === 'd'
  ) {
    return true;
  } else {
    return false;
  }
};

// sets the state in Board.js to highlight spaces for selected piece
export const highlightPossibleMoves = (
  pieces,
  player,
  setPlayer,
  setSelectedPossibleMoves,
  board
) => {
  const { white, black } = pieces.active;
  const allPieces = white.concat(black);
  const { x, y } = player.cursorPosition;

  // find selected piece from cursor position
  const selectedPiece = allPieces.find(
    p => p.position.x === x && p.position.y === y
  );

  if (selectedPiece) {
    // calculate possible moves for selected piece
    const possibleMoves = selectedPiece.getPossibleMoves(board);

    if (possibleMoves.length > 0) {
      // set state with array of possible moves
      setSelectedPossibleMoves(possibleMoves);

      // set state to move cursor to possible move space
      setPlayer({ ...player, cursorPosition: possibleMoves[0] });
    }
  }
};

export const moveCursorOnPossibleMoves = (
  selectedPossibleMoves,
  player,
  setPlayer,
  key
) => {
  let curPos = player.cursorPosition;
  let newPos;

  if (key.upArrow) {
    for (let _y = 1; _y <= 2; _y++) {
      const yAxisPos = { y: curPos.y + _y, x: curPos.x };

      const validSpace = selectedPossibleMoves.find(
        m => m.y === yAxisPos.y && m.x === yAxisPos.x
      );

      if (validSpace) {
        newPos = yAxisPos;
      } else {
        for (let _x = 1; _x <= 2; _x++) {
          const xAxisPos1 = { y: yAxisPos.y, x: yAxisPos.x + _x };
          const xAxisPos2 = { y: yAxisPos.y, x: yAxisPos.x - _x };

          const validSpace1 = selectedPossibleMoves.find(
            m => m.y === xAxisPos1.y && m.x === xAxisPos1.x
          );
          if (validSpace1) {
            newPos = validSpace1;
            break;
          } else {
            const validSpace2 = selectedPossibleMoves.find(
              m => m.y === xAxisPos2.y && m.x === xAxisPos2.x
            );
            if (validSpace2) {
              newPos = validSpace2;
              break;
            }
          }
        }
      }

      if (newPos) break;
    }
  }

  if (key.downArrow) {
    for (let _y = 1; _y <= 2; _y++) {
      const yAxisPos = { y: curPos.y - _y, x: curPos.x };

      const validSpace = selectedPossibleMoves.find(
        m => m.y === yAxisPos.y && m.x === yAxisPos.x
      );

      if (validSpace) {
        newPos = yAxisPos;
      } else {
        for (let _x = 1; _x <= 2; _x++) {
          const xAxisPos1 = { y: yAxisPos.y, x: yAxisPos.x + _x };
          const xAxisPos2 = { y: yAxisPos.y, x: yAxisPos.x - _x };

          const validSpace1 = selectedPossibleMoves.find(
            m => m.y === xAxisPos1.y && m.x === xAxisPos1.x
          );
          if (validSpace1) {
            newPos = validSpace1;
            break;
          } else {
            const validSpace2 = selectedPossibleMoves.find(
              m => m.y === xAxisPos2.y && m.x === xAxisPos2.x
            );
            if (validSpace2) {
              newPos = validSpace2;
              break;
            }
          }
        }
      }
    }
  }

  if (key.leftArrow) {
    for (let _x = 1; _x <= 2; _x++) {
      const xAxisPos = { x: curPos.x - _x, y: curPos.y };

      const validSpace = selectedPossibleMoves.find(
        m => m.y === xAxisPos.y && m.x === xAxisPos.x
      );

      if (validSpace) {
        newPos = xAxisPos;
      } else {
        for (let _y = 1; _y <= 2; _y++) {
          const yAxisPos1 = { x: xAxisPos.x, y: xAxisPos.y + _y };
          const yAxisPos2 = { x: xAxisPos.x, y: xAxisPos.y - _y };

          const validSpace1 = selectedPossibleMoves.find(
            m => m.y === yAxisPos1.y && m.x === yAxisPos1.x
          );
          if (validSpace1) {
            newPos = validSpace1;
            break;
          } else {
            const validSpace2 = selectedPossibleMoves.find(
              m => m.y === yAxisPos2.y && m.x === yAxisPos2.x
            );
            if (validSpace2) {
              newPos = validSpace2;
              break;
            }
          }
        }
      }

      if (newPos) break;
    }
  }

  if (key.rightArrow) {
    for (let _x = 1; _x <= 2; _x++) {
      const xAxisPos = { x: curPos.x + _x, y: curPos.y };

      const validSpace = selectedPossibleMoves.find(
        m => m.y === xAxisPos.y && m.x === xAxisPos.x
      );

      if (validSpace) {
        newPos = xAxisPos;
      } else {
        for (let _y = 1; _y <= 2; _y++) {
          const yAxisPos1 = { x: xAxisPos.x, y: xAxisPos.y + _y };
          const yAxisPos2 = { x: xAxisPos.x, y: xAxisPos.y - _y };

          const validSpace1 = selectedPossibleMoves.find(
            m => m.y === yAxisPos1.y && m.x === yAxisPos1.x
          );
          if (validSpace1) {
            newPos = validSpace1;
            break;
          } else {
            const validSpace2 = selectedPossibleMoves.find(
              m => m.y === yAxisPos2.y && m.x === yAxisPos2.x
            );
            if (validSpace2) {
              newPos = validSpace2;
              break;
            }
          }
        }
      }

      if (newPos) break;
    }
  }

  if (newPos) {
    setPlayer({
      ...player,
      cursorPosition: newPos,
    });
  }
};
