import React from 'react';
import Background from '../components/Background';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Background /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Background store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('select-background')).toEqual(true);
	    expect(wrapper.find('.bg-color-palette-container').length).toEqual(1);
	    expect(wrapper.find('.bg-color-palette-wrapper').length).toEqual(1);
	    expect(wrapper.find('.bg-color').length).toEqual(8);
	    expect(wrapper.find('.p-select-background').length).toEqual(1);
	    expect(wrapper.find('.p-background-message').length).toEqual(1);
	});
})
	