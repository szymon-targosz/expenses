import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../components/ListItem';
import expenses from '../fixtures/expenses';

test('should render ListItem correctly', () => {
    const wrapper = shallow(<ListItem {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});