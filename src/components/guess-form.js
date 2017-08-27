import React from 'react';
import {changeInput, submitGuess} from '../actions';
import {connect} from 'react-redux';

import './guess-form.css';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const inputVal = this.props.inputVal;
        this.props.dispatch(submitGuess(inputVal));
        this.props.dispatch(changeInput(''));
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text"
                  onChange={(e) => this.props.dispatch(changeInput(e.target.value))}
                  value={this.props.inputVal}
                  name="userGuess"
                  id="userGuess"
                  className="text"
                  maxLength="3"
                  autoComplete="off"
                  placeholder={Math.round(Math.random() * 100)} required
                     />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

const mapStateToProps = state => ({...state});

// this attaches redux functionality to our board and returns the board component
export default connect(mapStateToProps)(GuessForm);
