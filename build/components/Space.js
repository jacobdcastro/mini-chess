"use strict";function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function _iterableToArrayLimit(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,n=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(n)throw a}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var React=require("react"),_require=require("ink"),Color=_require.Color,App=require("./App"),Space=function(e){var r=e.space,t=e.defaultSpaceColor,o=e.selectedPossibleMoves,n=_slicedToArray(React.useState(null),2),a=n[0],i=n[1],c=React.useContext(App.GameContext).pieces,u=React.useContext(App.PlayerContext).player,l=c.active.black.concat(c.active.white),s=o.find(function(e){return e.x===r.position.x&&e.y===r.position.y});React.useEffect(function(){if(r.piece){var e=l.find(function(e){return e._id===r.piece._id});i(e)}else i(null)},[r.piece]);return React.createElement(Color,{bgKeyword:r.position.x===u.cursorPosition.x&&r.position.y===u.cursorPosition.y?"blue":s?"cyan":t},a?a.icon:"  ")};module.exports=Space;