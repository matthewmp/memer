import React from 'react';
import CropBtn from '../components/CropBtn';
import store from '../store.js';

import {shallow} from 'enzyme';
let wrapper;
describe('<CropBtn /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	     wrapper = shallow(<CropBtn store={store}/>);
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('crop')).toEqual(true);
	});

})
	