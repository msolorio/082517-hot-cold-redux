// import * from actions from '../actions';

const initialState = {
  playerWins: false,
  guesses: [],
  inputVal: '',
  feedback: 'Make Your Guess',
  secretNumber: Math.floor(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
  function decidePlayerWins(lastGuess) {
    return parseInt(lastGuess) === state.secretNumber
  }

  function decideFeedback(lastGuess) {
    let feedback;
    const guess = parseInt(lastGuess, 10);
    if (isNaN(guess)) {
            feedback = 'Please enter a valid number';
        return;
    }

    const difference = Math.abs(guess - state.secretNumber);

    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else if (difference === 0){
        feedback = 'You got it!';
    } else {
      throw(new Error('no message for guess'));
    }

    return feedback;
  }

  if (action.type === 'SUBMIT_GUESS') {
    return Object.assign({}, state, {
      guesses: [
        ...state.guesses, action.guess
      ],
      playerWins: decidePlayerWins(action.guess),
      feedback: decideFeedback(action.guess)
    });
  }

  if (action.type === 'START_NEW_GAME') {
    return Object.assign(initialState, {
      secretNumber: Math.floor(Math.random() * 100) + 1
    });
  }

  if (action.type === 'CHANGE_INPUT') {
    return Object.assign({}, state, {
      inputVal: action.inputVal
    });
  }

  return state
}
