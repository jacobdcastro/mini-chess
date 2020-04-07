const checkIsWhite = (_id: string): boolean => {
  if (_id[0] == _id[0].toLowerCase()) {
    return false;
  } else {
    return true;
  }
};

export default checkIsWhite;
