import React from 'react';
import {mount, shallow} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm/>', () => {
  it('renders without crashing', () => {
    shallow(<GuessForm/>);
  });
});
