import React from 'react';
import Canvas from '../components/Canvas';
import store from '../store.js';

import {shallow} from 'enzyme';

describe('<Canvas /> should render with appropriate ids', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Canvas store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.find('#canvas').length).toEqual(1);
	});
})