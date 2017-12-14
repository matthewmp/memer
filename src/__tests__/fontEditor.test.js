import React from 'react';
import FontEditor from '../components/FontEditor';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<FontEditor /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<FontEditor store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('font-selector')).toEqual(true);
	    expect(wrapper.find('.x-close').length).toEqual(1);
	    expect(wrapper.find('.select-font').length).toEqual(1);
	    expect(wrapper.find('li').length).toEqual(8);
	});
})
	