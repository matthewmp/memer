import React from 'react';
import Menu from '../components/Menu';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Menu /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Menu store={store}/>);
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('menu-wrapper')).toEqual(true);
	    expect(wrapper.find('.hb-menu').length).toEqual(1);
	    expect(wrapper.find('.menu-item-wrapper').length).toEqual(6);
	    expect(wrapper.find('.fa').length).toEqual(6);
	});
})
	