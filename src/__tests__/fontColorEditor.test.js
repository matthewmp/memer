import React from 'react';
import FontColorEditor from '../components/FontColorEditor';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<FontColorEditor /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<FontColorEditor store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('select-font-color')).toEqual(true);
	    expect(wrapper.find('.x-close').length).toEqual(1);
	    expect(wrapper.find('.font-color-palette-wrapper').length).toEqual(1);
	    expect(wrapper.find('.p-select-font-color').length).toEqual(1);
	    expect(wrapper.find('.font-color').length).toEqual(7);
	});
})
	