"use strict";
const React = require("react");
const PropTypes = require("prop-types");
const importJsx = require("import-jsx");

const Header = importJsx("./Header");
const Game = importJsx("./Game");

const App = () => {
	return (
		<>
			<Header />
			<Game />
		</>
	);
};

module.exports = App;
