import React from 'react';
import Spinner from '../components/Spinner';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Spinner /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Spinner store={store}/>);
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('spinner-container')).toEqual(true);
	    expect(wrapper.find('.bubble').length).toEqual(3);
	});
})
	