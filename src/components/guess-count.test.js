import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import GuessCount from './guess-count';
import Game from './game';

describe('<GuessCount/>', () => {
  it('renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('should recieve count as props', () => {
    const game = mount(<Game />);
    const guessCount = game.find(GuessCount);

    game.instance().setState({guesses: [12]});
    expect(guessCount.props().count).to.equal(1);
  });

  it('renders out the correct value given guesses array in state', () => {
    const game = mount(<Game />);
    game.instance().setState({guesses: [14]});
    expect(game.find('#count').text()).to.equal('1');
  });

  it('renders correct value when a guess is entered into the form', () => {
    const game = mount(<Game />);
    const form = game.find('form');
    form.find('#userGuess').node.value = '14';
    form.simulate('submit');
    expect(game.find('#count').text()).to.equal('1');
  });
});
