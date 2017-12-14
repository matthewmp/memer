import React from 'react';
import Slideshow from '../components/Slideshow';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Slideshow /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Slideshow store={store}/>);
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('slideshow-container')).toEqual(true);
	    expect(wrapper.find('.slider').length).toEqual(1);
	});
})
	