import React from 'react';
import Landing from '../components/Landing';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Landing /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Landing store={store}/>);
	    expect(wrapper.length).toEqual(1);
	    
	    expect(wrapper.find('.landing-upper').length).toEqual(1);
	    expect(wrapper.find('.steps').length).toEqual(1);
	    expect(wrapper.find('.landing-lower').length).toEqual(1);
	});
})
	