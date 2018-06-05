import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />);
});

test('should render AddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('Form').prop('onSubmit')(expenses[2]);
    expect(addExpense).toHaveBeenLastCalledWith(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});