import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import Game from './game';
import GuessSection from './guess-section';

describe('<GuessSection/>', () => {
  it('renders without crashing', () => {
    shallow(<GuessSection/>);
  });

  it('renders "You\'re Ice Cold..." when the player is >= 50 digits away from the secret number', () => {
    const game = mount(<Game />);
    const form = game.find('form');
    const feedback = game.find('#feedback');
    game.instance().setState({correctAnswer: 1});
    form.find('#userGuess').node.value = '51';
    form.simulate('submit');
    expect(feedback.text()).to.equal('You\'re Ice Cold...');
  });

  it('renders "You\'re Cold..." when the player is between 49 and 30 digits away from the secret number', () => {
    const game = mount(<Game />);
    const form = game.find('form');
    const feedback = game.find('#feedback');
    game.instance().setState({correctAnswer: 1});
    form.find('#userGuess').node.value = '31';
    form.simulate('submit');
    expect(feedback.text()).to.equal('You\'re Cold...');
  });

  it('renders "You\'re Warm" when the player is between 29 and 10 digits away from the secret number', () => {
    const game = mount(<Game />);
    const form = game.find('form');
    const feedback = game.find('#feedback');
    game.instance().setState({correctAnswer: 1});
    form.find('#userGuess').node.value = '11';
    form.simulate('submit');
    expect(feedback.text()).to.equal('You\'re Warm');
  });

  it('renders "You\'re Hot!" when the player between 9 and 1 digits away from the secret number', () => {
    const game = mount(<Game />);
    const form = game.find('form');
    const feedback = game.find('#feedback');
    game.instance().setState({correctAnswer: 1});
    form.find('#userGuess').node.value = '10';
    form.simulate('submit');
    expect(feedback.text()).to.equal('You\'re Hot!');
  });

  it('renders "You got it!" when the player guesses the secret number', () => {
    const game = mount(<Game />);
    const form = game.find('form');
    const feedback = game.find('#feedback');
    game.instance().setState({correctAnswer: 1});
    form.find('#userGuess').node.value = '1';
    form.simulate('submit');
    expect(feedback.text()).to.equal('You got it!');
  });
});
