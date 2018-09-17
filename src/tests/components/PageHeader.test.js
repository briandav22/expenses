import React from 'react';
import {shallow} from 'enzyme';
import PageHeader from '../../components/PageHeader';

test('Should render header', ()=>{
    const wrapper = shallow(<PageHeader/>)
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe("Whats Up")

    // const renderer= new  ReactShallowRenderer();

    // renderer.render(<PageHeader/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    
})
