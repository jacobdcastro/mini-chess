#!/usr/bin/env node
"use strict";
import * as React from "react";
import { render } from "ink";
import importJsx from "import-jsx";
// import meow from "meow";

const App = importJsx("./components/App");

// const cli = meow(`
// 	Usage
// 	  $ cli-chess

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ cli-chess --name=Jane
// 	  Hello, Jane
// `);

render(React.createElement(App));
