"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var i=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Piece=require("../piece"),checkIsWhite=require("../../helpers/checkIsWhite"),Pawn=function(e){_inherits(r,Piece);var t=_createSuper(r);function r(e,i,o){var n;return _classCallCheck(this,r),(n=t.call(this,e,i,"♟ ","♙ ",1))._id=(e?"P":"p")+o.toString(),n.getPossibleMoves=n.getPossibleMoves,n}return _createClass(r,[{key:"getPossibleMoves",value:function(e){var t=[],r=this.position,i=r.x,o=r.y;if(this.isWhite){var n={x:i,y:o+2},c={x:i,y:o+1},s={x:i+1,y:o+1},u={x:i-1,y:o+1};if(!this.hasMoved)null===e[n.y][n.x].piece&&t.push(n);if(null===e[c.y][c.x].piece&&t.push(c),7!==i){var f=e[s.y][s.x];null!==f.piece&&checkIsWhite(f.piece._id)!==this.isWhite&&t.push(s)}if(0!==i){var p=e[u.y][u.x];null!==p.piece&&checkIsWhite(p.piece._id)!==this.isWhite&&t.push(u)}}else{var l={x:i,y:o-2},a={x:i,y:o-1},y={x:i-1,y:o-1},h={x:i+1,y:o-1};if(!this.hasMoved)null===e[l.y][l.x].piece&&t.push(l);if(null===e[a.y][a.x].piece&&t.push(a),0!==i){var _=e[y.y][y.x];null!==_.piece&&checkIsWhite(_.piece._id)!==this.isWhite&&t.push(y)}if(7!==i){var b=e[h.y][h.x];null!==b.piece&&checkIsWhite(b.piece._id)!==this.isWhite&&t.push(h)}}return t}}]),r}();module.exports=Pawn;