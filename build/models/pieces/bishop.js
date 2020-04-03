"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Piece=require("../piece"),checkIsWhite=require("../../helpers/checkIsWhite"),Bishop=function(e){_inherits(r,Piece);var t=_createSuper(r);function r(e,o,i){var n;return _classCallCheck(this,r),(n=t.call(this,e,o,"♝ ","♗ ",3))._id=(e?"B":"b")+i.toString(),n.getPossibleMoves=n.getPossibleMoves,n}return _createClass(r,[{key:"getPossibleMoves",value:function(e){for(var t=[],r=this.position,o=r.x,i=r.y,n=1;n<8;n++){var s={x:o+n,y:i+n};if(s.x>=8||s.y>=8)break;var c=e[s.y][s.x].piece;if(null!==c){if(checkIsWhite(c._id)!==this.isWhite){t.push(s);break}break}t.push(s)}for(var u=1;u<8;u++){var f={x:o-u,y:i+u};if(f.x<0||f.y>=8)break;var a=e[f.y][f.x].piece;if(null!==a){if(checkIsWhite(a._id)!==this.isWhite){t.push(f);break}break}t.push(f)}for(var p=1;p<8;p++){var l={x:o-p,y:i-p};if(l.x<0||l.y<0)break;var y=e[l.y][l.x].piece;if(null!==y){if(checkIsWhite(y._id)!==this.isWhite){t.push(l);break}break}t.push(l)}for(var h=1;h<8;h++){var b={x:o+h,y:i-h};if(b.x>=8||b.y<0)break;var _=e[b.y][b.x].piece;if(null!==_){if(checkIsWhite(_._id)!==this.isWhite){t.push(b);break}break}t.push(b)}return t}}]),r}();module.exports=Bishop;