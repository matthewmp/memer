import React from 'react';
import Preview from '../components/Preview';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Preview /> should render with out crashing', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Preview store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	});
})
	