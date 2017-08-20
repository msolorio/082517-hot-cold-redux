import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';


import Game from './game';
import GuessList from './guess-list';

describe('<Game />', () => {
  it('Renders without crashing', () => {
      shallow(<Game />);
  });
});
