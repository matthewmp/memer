import React from 'react';
import Nav from '../components/Nav';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Nav /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Nav store={store}/>);
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.find('header').length).toEqual(1);
	    expect(wrapper.find('.logo').length).toEqual(1);
	    expect(wrapper.find('.logo2').length).toEqual(1);
	});
})
	