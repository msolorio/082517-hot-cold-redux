export const submitGuess = guess => ({
  type: 'SUBMIT_GUESS',
  guess
});

export const startNewGame = () => ({
  type: 'START_NEW_GAME'
});

export const changeInput = (inputVal) => ({
  type: 'CHANGE_INPUT',
  inputVal
});
