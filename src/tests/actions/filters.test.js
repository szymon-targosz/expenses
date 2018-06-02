import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should create set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should create set text filter action object with provided value', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should create action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should create action object for sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should create action object for set start date', () => {
    const action = setStartDate(moment(1));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(1)
    });
});

test('should create action object for set end date', () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    });
});