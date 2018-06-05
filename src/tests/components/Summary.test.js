import React from 'react';
import { shallow } from 'enzyme';
import { Summary } from '../../components/Summary';

test('should correctly render Summary with multiple expenses', () => {
    const wrapper = shallow(<Summary expensesSum={1234} expensesCount={4}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render Summary with one expense', () => {
    const wrapper = shallow(<Summary expensesSum={100} expensesCount={1}/>);
    expect(wrapper).toMatchSnapshot();
});