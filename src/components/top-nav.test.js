import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', () => {
  it('should render without crashing', () => {
    shallow(<TopNav/>);
  });
});
