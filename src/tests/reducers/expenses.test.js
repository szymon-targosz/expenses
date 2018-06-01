import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense if ID matches', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '23'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'Iphone X',
            amount: 99999,
            createdAt: 17500,
            note: 'Never again'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            amount: 4573
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(action.updates.amount);
});

test('should not edit an expense if ID not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-100',
        updates: {
            amount: 4573
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});