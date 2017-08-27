import React from 'react';
import {startNewGame} from '../actions';
import Header from './header';
import {connect} from 'react-redux';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export class Game extends React.Component {
    newGame() {
        this.props.dispatch(startNewGame());
    }

    // guess(inputVal) {
    //   this.props.dispatch(submitGuess(inputVal));
    // }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

const mapStateToProps = state => ({...state});

// this attaches redux functionality to our board and returns the board component
export default connect(mapStateToProps)(Game);
