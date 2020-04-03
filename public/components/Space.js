"use strict";
const React = require('react');
const { Color } = require('ink');
const App = require('./App');
const Space = ({ space, defaultSpaceColor, selectedPossibleMoves }) => {
    const [piece, setPiece] = React.useState(null);
    const { pieces } = React.useContext(App.GameContext);
    const { player } = React.useContext(App.PlayerContext);
    const allPieces = pieces.active.black.concat(pieces.active.white);
    // check if space if a possible move for selected piece
    const isPossibleMove = selectedPossibleMoves.find(m => m.x === space.position.x && m.y === space.position.y);
    React.useEffect(() => {
        if (space.piece) {
            const p = allPieces.find(p => p._id === space.piece._id);
            setPiece(p);
        }
        else {
            setPiece(null);
        }
    }, [space.piece]);
    const setBgColor = () => {
        if (space.position.x === player.cursorPosition.x &&
            space.position.y === player.cursorPosition.y) {
            return 'blue';
        }
        else if (isPossibleMove) {
            return 'cyan';
        }
        else {
            return defaultSpaceColor;
        }
    };
    const setSpaceContents = () => {
        if (piece)
            return piece.icon;
        else
            return '  ';
    };
    return <Color bgKeyword={setBgColor()}>{setSpaceContents()}</Color>;
};
module.exports = Space;