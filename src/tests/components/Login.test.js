import React from 'react';
import { Login } from '../../components/Login';
import { shallow } from 'enzyme';

test('should render Login component correctly', () => {
    const wrapper = shallow(<Login startLogin={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle startLogin', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});