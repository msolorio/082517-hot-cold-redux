import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import Game from './game';
import GuessList from './guess-list';
import GuessForm from './guess-form';

describe('<GuessList/>', () => {

  it('renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('recieves guesses as props', () => {
    const game = mount(<Game />);
    const guessList = game.find(GuessList);

    game.instance().setState({guesses: [12]});
    expect(guessList.props().guesses.length).to.equal(1);
  });

  it('renders out guesses given an array of guesses in state', () => {
    const game = mount(<Game />);
    game.instance().setState({guesses: [12]});

    const guesses = game.find('.guess');
    expect(guesses.length).to.equal(1);
  });

  it('renders a guess when a number is entered into the form', () => {
    const game = mount(<Game />);
    const form = game.find('form');
    form.find('#userGuess').node.value = '14';
    form.simulate('submit');
    const guesses = game.find('.guess');
    expect(guesses.length).to.equal(1);
  });

});
