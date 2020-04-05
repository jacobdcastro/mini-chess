const getSpaceId = (y: number, x: number): string =>
  String.fromCharCode(97 + x) + (y + 1);

export default getSpaceId;
