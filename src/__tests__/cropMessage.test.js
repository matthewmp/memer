import React from 'react';
import CropMessage from '../components/CropMessage';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<CropMessage /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<CropMessage store={store}/>);
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('crop-message')).toEqual(true);
	    expect(wrapper.find('span').length).toEqual(1);
	    expect(wrapper.find('span').length).toEqual(1);
	});
})
	