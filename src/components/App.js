"use strict";
const React = require("react");
const importJsx = require("import-jsx");

const { GameContextParent } = importJsx("./GameContext");
const Header = importJsx("./Header");
const GameView = importJsx("./GameView");

const App = () => {
	return (
		<>
			<Header />

			<GameContextParent>
				<GameView />
			</GameContextParent>
		</>
	);
};

module.exports = App;
