import Pieces from '../models/allPieces';

const getKing = (pieces: Pieces, isWhite: boolean) =>
  isWhite
    ? pieces.active.white.find(p => p._id === 'K')
    : pieces.active.black.find(p => p._id === 'k');

export default getKing;
