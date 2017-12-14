import React from 'react';
import Upload from '../components/Upload';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Upload /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Upload store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('upload-overlay')).toEqual(true);
	    expect(wrapper.find('.upload-btn-wrapper').length).toEqual(1);
	    expect(wrapper.find('.btn-main').length).toEqual(2);
	    expect(wrapper.find('.search-btn-wrapper').length).toEqual(1);
	    expect(wrapper.find('input').length).toEqual(1);
	    expect(wrapper.find('button').length).toEqual(2);
	});
})
	