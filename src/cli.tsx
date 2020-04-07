#!/usr/bin/env node
import * as React from 'react';
import { render } from 'ink';
// import importJsx from 'import-jsx';
// import meow from "meow";
import App from './components/App';
// const App = importJsx('./components/App');

// const cli = meow(`
// 	Usage
// 	  $ cli-chess

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ cli-chess --name=Jane
// 	  Hello, Jane
// `);

// console.log(App);

render(<App />);
