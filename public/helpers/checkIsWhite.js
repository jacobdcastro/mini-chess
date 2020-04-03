"use strict";
const checkIsWhite = (_id) => {
    // test
    if (_id[0] == _id[0].toLowerCase()) {
        return false;
    }
    else {
        return true;
    }
};
module.exports = checkIsWhite;
