import React from 'react';
import {shallow} from 'enzyme';
import PageNotFound from '../../components/PageNotFound';



test('Should render Page Note Found', ()=>{
    const wrapper = shallow(<PageNotFound/>)
    expect(wrapper).toMatchSnapshot()
});