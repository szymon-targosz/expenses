import React from 'react';
import { List } from '../../components/List';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render List without expenses', () => {
    const wrapper = shallow(<List  expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render List with expenses', () => {
    const wrapper = shallow(<List  expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});