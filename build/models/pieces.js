"use strict";function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,i,n){return i&&_defineProperties(e.prototype,i),n&&_defineProperties(e,n),e}var Pawn=require("./pieces/pawn"),Bishop=require("./pieces/bishop"),Knight=require("./pieces/knight"),Rook=require("./pieces/rook"),King=require("./pieces/king"),Queen=require("./pieces/queen"),Pieces=function(){function e(){_classCallCheck(this,e),this.active={white:[new Rook(!0,{x:0,y:0},1),new Knight(!0,{x:1,y:0},1),new Bishop(!0,{x:2,y:0},1),new Queen(!0,{x:3,y:0},1),new King(!0,{x:4,y:0}),new Bishop(!0,{x:5,y:0},2),new Knight(!0,{x:6,y:0},2),new Rook(!0,{x:7,y:0},2)],black:[new Rook(!1,{x:0,y:7},1),new Knight(!1,{x:1,y:7},1),new Bishop(!1,{x:2,y:7},1),new Queen(!1,{x:3,y:7},1),new King(!1,{x:4,y:7}),new Bishop(!1,{x:5,y:7},2),new Knight(!1,{x:6,y:7},2),new Rook(!1,{x:7,y:7},2)]},this.addInitialPawns(),this.captured={white:[],black:[]}}return _createClass(e,[{key:"initializeMove",value:function(e){var i,n=e.movedPieceIsWhite,t=e.movedPieceId,r=(e.startingLocation,e.endingLocation),a=e.capturedPieceId;(n?this.active.white.find(function(e){return e._id===t}):this.active.black.find(function(e){return e._id===t})).move(r),null!==a&&(n?(i=this.active.black.find(function(e){return e._id===a}),this.captured.black.push(i),this.active.black=this.active.black.filter(function(e){return e._id!==a})):(i=this.active.white.find(function(e){return e._id===a}),this.captured.white.push(i),this.active.white=this.active.white.filter(function(e){return e._id!==a})))}},{key:"addInitialPawns",value:function(){for(var e=0;e<8;e++)this.active.white.push(new Pawn(!0,{x:e,y:1},e+1));for(var i=0;i<8;i++)this.active.black.unshift(new Pawn(!1,{x:i,y:6},i+1))}}]),e}();module.exports=Pieces;