const checkIsWhite = _id => {
  if (_id[0] == _id[0].toLowerCase()) {
    return false;
  } else {
    return true;
  }
};

module.exports = checkIsWhite;
