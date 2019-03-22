import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';

const sections = [
    {
      title: 'Section 1',
      content: 'Section 1 Content: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Section 2 Content: Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Section 3 Content: Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]

describe(`Accordian Component`, () => {

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders empty with no props', () => {
        const wrapper = shallow(<Accordian />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    
    it('renders no sections by default', () => {
        const wrapper = shallow(<Accordian sections={sections} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    
    it('renders opened section when clicked', () => {
        const wrapper = shallow(<Accordian sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    
    it('only renders current open section', () => {
        const wrapper = shallow(<Accordian sections={sections} />)
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})