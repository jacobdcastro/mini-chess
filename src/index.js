#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");

const ui = importJsx("./components/App");

const cli = meow(`
	Usage
	  $ cli-chess

	Options
		--name  Your name

	Examples
	  $ cli-chess --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
