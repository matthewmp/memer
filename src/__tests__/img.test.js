import React from 'react';
import Img from '../components/Img';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Img /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Img />);
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('slide')).toEqual(true);
	    // expect(wrapper.find('.bg-color-palette-container').length).toEqual(1);
	    // expect(wrapper.find('.bg-color-palette-wrapper').length).toEqual(1);
	    // expect(wrapper.find('.bg-color').length).toEqual(8);
	    // expect(wrapper.find('.p-select-background').length).toEqual(1);
	    // expect(wrapper.find('.p-background-message').length).toEqual(1);
	});
})
	