// @ts-nocheck
const getSpaceIds = coords => {
  const ids = coords.map(coord => {
    const id = String.fromCharCode(97 + coord.x) + (coord.y + 1);
    return id;
  });

  return ids;
};

export default getSpaceIds;
