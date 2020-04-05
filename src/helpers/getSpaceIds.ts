import { Position } from './interfaces';

const getSpaceIds = (coords: Position[]): string[] => {
  const ids = coords.map((coord: Position): string => {
    const id = String.fromCharCode(97 + coord.x) + (coord.y + 1);
    return id;
  });

  return ids;
};

export default getSpaceIds;
