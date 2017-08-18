import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';


import Game from './game';
import GuessList from './guess-list';

describe('<Game />', () => {
  it('Renders without crashing', () => {
      shallow(<Game />);
  });



  // it('guesses the correct answer', () => {
  //   const gameComponent = mount(<Game />);
  //   const guessCount = gameComponent.find(GuessCount);
  //   console.log(gameComponent.instance().state.correctAnswer);
  //   gameComponent.instance().setState({guesses: [12]});
  //   expect(guessCount.props().count).equal(1);
  // });
});
