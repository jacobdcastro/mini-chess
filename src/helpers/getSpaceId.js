const getSpaceId = (y, x) => String.fromCharCode(97 + x) + (y + 1);

module.exports = getSpaceId;
