import { addExpense, startAddExpense, removeExpense, startRemoveExpense, editExpense, startEditExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const createMockStore = configureStore([thunk])

beforeEach((done) => {
    const expensesTransformed = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesTransformed[id] = {
            description,
            note,
            amount,
            createdAt
        };
    });
    database.ref('expenses').set(expensesTransformed).then(() => done());
});

// EDIT EXPENSE
test('should setup edit expense action object', () => {
    const action = editExpense('-10', { amount: 4321});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '-10',
        updates: { amount: 4321}
    });
});

test('should edit expense from firebase and store', (done) => {
    const store = createMockStore();
    const id = expenses[1].id;
    const updates = {
        description: 'Plates',
        amount: 15000
    };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val().description).toBe(updates.description);
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});

// REMOVE EXPENSE
test('should setup remove expense action object', () => {
    const action = removeExpense('123');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('should remove expense from database and store', (done) => {
    const store = createMockStore();
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

// ADD EXPENSE
test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    });
});

test('should add expense to database and redux store with provided values', (done) => {
    const store = createMockStore();
    const newExpense = {
        description: 'Water',
        note: '',
        amount: 100,
        createdAt: 1200
    };
    store.dispatch(startAddExpense(newExpense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...newExpense
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(newExpense);
        done();
    });
});

test('should add expense to database and redux store with defaults', (done) => {
    const store = createMockStore();

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                amount: 0,
                createdAt: 0,
                note: ''
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val()).toEqual({
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        });
        done();
    });
});

// SET EXPENSES
test('should setup set expenses action object', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch expenses from database', (done) => {
    const store = createMockStore();
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});
