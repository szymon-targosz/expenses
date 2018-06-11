import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpense 
            startEditExpense={startEditExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history} 
            expense={expenses[0]} 
        />
    );
});

test('should render EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onRemove', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});

test('should handle onSubmit', () => {
    wrapper.find('Form').prop('onSubmit')(expenses[0]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});
