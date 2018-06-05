import React from 'react';
import { Filters } from '../../components/Filters';
import { filters, altFilters } from '../fixtures/filters';
import { shallow } from 'enzyme';
import moment from 'moment';

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper;
beforeEach(() => {
    setStartDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(
        <Filters 
            filters={filters} 
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render Filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render Filters correctly with altFilters', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('should handle onTextChange', () => {
    const value = 'bill';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sortByDate', () => {
    const value = 'date';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sortByAmount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle onFocusChange', () => {
    const calendarFocused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

test('should handle onDateChange', () => {
    const startDate = moment(0).add(2, 'days');
    const endDate = moment(0).add(9, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});