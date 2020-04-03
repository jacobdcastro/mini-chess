"use strict";
// ? this function required from seperate module due to size
const moveCursorOnPossibleMoves = require('./moveCursorOnPossibleMoves');
const moveCursor = (input, key, player) => {
    const { x, y } = player.cursorPosition;
    if (key.upArrow || input === 'w') {
        if (player.color === 'w' && y < 7)
            return { x, y: y + 1 };
        else if (y > 0)
            return { x, y: y - 1 };
    }
    if ((key.rightArrow || input === 'd') && x < 7) {
        return { x: x + 1, y };
    }
    if (key.downArrow || input === 's') {
        if (player.color === 'w' && y > 0)
            return { x, y: y - 1 };
        else if (y < 7)
            return { x, y: y + 1 };
    }
    if ((key.leftArrow || input === 'a') && x > 0) {
        return { x: x - 1, y };
    }
    return { x, y };
};
const cursorDidMove = (input, key) => {
    if (key.upArrow ||
        key.downArrow ||
        key.leftArrow ||
        key.rightArrow ||
        input === 'w' ||
        input === 'a' ||
        input === 's' ||
        input === 'd') {
        return true;
    }
    else {
        return false;
    }
};
// sets the state in Board.js to highlight spaces for selected piece
const highlightPossibleMoves = (pieces, player, setPlayer, setSelectedPossibleMoves, board) => {
    const { white, black } = pieces.active;
    const allPieces = white.concat(black);
    const { x, y } = player.cursorPosition;
    // find selected piece from cursor position
    const selectedPiece = allPieces.find(p => p.position.x === x && p.position.y === y);
    if (selectedPiece) {
        // calculate possible moves for selected piece
        const possibleMoves = selectedPiece.getPossibleMoves(board);
        if (possibleMoves.length > 0) {
            // set state with array of possible moves
            setSelectedPossibleMoves(possibleMoves);
            // set state to move cursor to possible move space
            setPlayer(Object.assign(Object.assign({}, player), { cursorPosition: possibleMoves[0] }));
        }
    }
};
module.exports = {
    moveCursor,
    cursorDidMove,
    highlightPossibleMoves,
    moveCursorOnPossibleMoves,
};
