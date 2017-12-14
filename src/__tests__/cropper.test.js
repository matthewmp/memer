import React from 'react';
import Cropper from '../components/Cropper';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Cropper /> should render without crashing', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Cropper store={store}/>);
	    expect(wrapper.length).toEqual(1);
	});
})
	