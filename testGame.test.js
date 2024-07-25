const TicTacToe = require('./ticTacToe');

test('winner vertical', () => {
  const board = [
    ["X", "O", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "O"]
  ];
  const ticTacToegame = new TicTacToe(board);
  expect(ticTacToegame.checkWinner()).toBe("X");
});

test('winner horizontal', () => {
  const board = [
    ["X", "X", "X", "X"],
    ["O", "O", "O", ""],
    ["O", "X", "O", ""],
    ["X", "O", "O", "X"]
  ];
  const ticTacToegame = new TicTacToe(board);
  expect(ticTacToegame.checkWinner()).toBe("X");
});

test('winner diagonal', () => {
  const board = [
    ["X", "O", "O", "X"],
    ["O", "X", "O", "X"],
    ["O", "O", "X", "X"],
    ["X", "O", "O", "X"]
  ];
  const ticTacToegame = new TicTacToe(board);
  expect(ticTacToegame.checkWinner()).toBe("X");
});

test('no winner', () => {
  const board = [
    ["X", "O", "X", "O"],
    ["O", "X", "O", "X"],
    ["X", "O", "X", "O"],
    ["X", "X", "O", "O"]
  ];
  const ticTacToegame = new TicTacToe(board);
  expect(ticTacToegame.checkWinner()).toBe("No Winners yet");
});

test('any moves left', () => {
  const board = [
    ["X", "O", "X", ""],
    ["O", "X", "O", "X"],
    ["X", "O", "X", "O"],
    ["O", "X", "O", "X"]
  ];
  const ticTacToegame = new TicTacToe(board);
  expect(ticTacToegame.anyMovesLeft()).toBe(true);
});

test('no moves left', () => {
  const board = [
    ["X", "O", "X", "O"],
    ["O", "X", "O", "X"],
    ["X", "O", "X", "O"],
    ["O", "X", "O", "X"]
  ];
  const ticTacToegame = new TicTacToe(board);
  expect(ticTacToegame.anyMovesLeft()).toBe(false);
});

test('is game over', () => {
  const board = [
    ["X", "O", "X", "X"],
    ["O", "X", "O", "O"],
    ["O", "O", "X", "X"],
    ["X", "X", "O", "O"]
  ];
  const ticTacToegame = new TicTacToe(board);
  expect(ticTacToegame.isGameOver()).toBe(true);
});