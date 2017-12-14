import React from 'react';
import TextEditor from '../components/TextEditor';
import store from '../store.js';

import {shallow} from 'enzyme';
describe('<TextEditor /> should render with appropriate classes', () => {
	it('Should render w/o crashing', () => {
	    const wrapper = shallow(<TextEditor store={store}/>).dive();
	    expect(wrapper.length).toEqual(1);
	    expect(wrapper.hasClass('text-editor')).toEqual(true);
	    expect(wrapper.find('.x-close').length).toEqual(1);
	    expect(wrapper.find('#text-form').length).toEqual(1);
	    expect(wrapper.find('#inp-txt-add').length).toEqual(1);
	    expect(wrapper.find('input').length).toEqual(1);
	    expect(wrapper.find('button').length).toEqual(1);
	});
})
	