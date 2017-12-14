import React from 'react';
import Stroke from '../components/Stroke';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Stroke /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Stroke store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('select-stroke')).toEqual(true);
	    expect(wrapper.find('.x-close').length).toEqual(1);
	    expect(wrapper.find('#strokeForm').length).toEqual(1);
	    expect(wrapper.find('.wrapper-stroke-slider').length).toEqual(1);
	    expect(wrapper.find('.stroke-wrapper').length).toEqual(1);
	    expect(wrapper.find('.lbl-slider').length).toEqual(2);
	    expect(wrapper.find('input').length).toEqual(2);
	    expect(wrapper.find('label').length).toEqual(2);
	});
})
	