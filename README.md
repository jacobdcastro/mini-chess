# cli-chess

An object-oriented chess game played in the terminal. Still a a work in progress, but will be testing soon!

The chess engine is entirely coded from scratch by myself (Jacob). I wanted to code it from scratch literally just for the experience. Turned out to be way more difficult than I'd anticipated, but so much dang fun.

It's very object-oriented using lots of classes and methods to make things work.

It also features a custom `useChessGame` React hook. YES. React.

This game uses [Ink](https://github.com/vadimdemedes/ink) to generate the cli view with React. Take a look around the repo, you'll see what I mean. I love it.

## Test out the game!

It's now ready to play! Kind of. The Bot AI is pretty bad at chess, choosing moves entirely at random. My next step is to add a bit of intelligence to the artificial player. :)

Though not on NPM quite yet, you can clone this project and get it up and running locally!

```bash
git clone https://github.com/jacobdcastro/cli-chess.git
cd cli-chess
npm install
npm start
```

You should see a little chess board, pieces, and move the cursor around! You can use `ctrl + c` to exit the app.

## CLI

More soon to come!
