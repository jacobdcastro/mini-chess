const checkIsWhite = (_id: string) => {
  // test
  if (_id[0] == _id[0].toLowerCase()) {
    return false;
  } else {
    return true;
  }
};

export default checkIsWhite;
