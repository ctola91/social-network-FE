import React from 'react';
import { shallow } from 'enzyme';

import Timer from './Timer';

describe('Timer Component', () => {
  const wrapper = shallow(<Timer />);

  it('Timer component should render a start button', () => {
    expect(wrapper.find('button.start').text()).toEqual('Start Working');
  });

  it('Timer component should render a short button', () => {
    expect(wrapper.find('button.short').text()).toEqual('Short Break');
  });

  it('Timer component should render a long button', () => {
    expect(wrapper.find('button.long').text()).toEqual('Long Break');
  });
});
