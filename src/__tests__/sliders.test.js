import React from 'react';
import Sliders from '../components/Sliders';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Sliders /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Sliders store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('select-sliders')).toEqual(true);
	    expect(wrapper.find('.fa').length).toEqual(4);
	    expect(wrapper.find('.sliders-wrapper').length).toEqual(1);
	    expect(wrapper.find('.x-close').length).toEqual(1);
	    expect(wrapper.find('.arrow-l-r').length).toEqual(1);
	    expect(wrapper.find('.arrow-up').length).toEqual(1);
	    expect(wrapper.find('.arrow-down').length).toEqual(1);
	});
})
	