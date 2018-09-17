import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';



test('Should render Page Note Found', ()=>{
    const wrapper = shallow(<ExpenseDashboard/>)
    expect(wrapper).toMatchSnapshot()
});