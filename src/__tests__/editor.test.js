import React from 'react';
import Editor from '../components/Editor';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<Editor /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<Editor store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('editor')).toEqual(true);
	    expect(wrapper.find('.upper-editor').length).toEqual(1);
	    expect(wrapper.find('.lower-editor').length).toEqual(1);
	    expect(wrapper.find('.toolbar-wrapper').length).toEqual(1);
	    expect(wrapper.find('.tool-icon').length).toEqual(5);
	    expect(wrapper.find('.fa').length).toEqual(4);
	    expect(wrapper.find('.tool').length).toEqual(5);
	    expect(wrapper.find('.btn-meme-it').length).toEqual(1);
	});
})
	