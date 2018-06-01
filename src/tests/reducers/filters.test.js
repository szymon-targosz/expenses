import filtersReducer from '../../reducers/filters';
import moment from 'moment'

test('should setup default state', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const current = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(current, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'filter'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(action.text);
});

test('should set start date', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment()
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(action.startDate);
});

test('should set end date', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment()
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(action.endDate);
});