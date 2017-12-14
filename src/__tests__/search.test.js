import React from 'react';
import Search from '../components/Search';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Search /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Search store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('search')).toEqual(true);
	    expect(wrapper.find('.fa').length).toEqual(1);
	    expect(wrapper.find('.search-results-wrapper').length).toEqual(1);
	    expect(wrapper.find('#searchForm').length).toEqual(1);
	    expect(wrapper.find('input').length).toEqual(1);
	    expect(wrapper.find('button').length).toEqual(1);
	});
})
	