// moves cursor across possible hightlighted spaces after piece is selected
const moveCursorOnPossibleMoves = (
  selectedPossibleMoves,
  player,
  setPlayer,
  key
) => {
  let curPos = player.cursorPosition;
  let newPos = null;

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

module.exports = moveCursorOnPossibleMoves;
