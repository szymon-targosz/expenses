import React from 'react';
import Form from '../../components/Form';
import { shallow } from 'enzyme';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import { SingleDatePicker } from 'react-dates';

test('should render Form without data', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Form with data', () => {
    const wrapper = shallow(<Form expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Form with error - invalid submission', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<Form  />);
    const value = 'new one';
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set amount on input change', () => {
    const wrapper = shallow(<Form  />);
    const value = '99.99';
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on input change if value is invalid', () => {
    const wrapper = shallow(<Form />);
    const value = '99.999';
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should set note on textarea change', () => {
    const wrapper = shallow(<Form  />);
    const value = 'Cracow - 2 weeks';
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should handle onDateChange', () => {
    const wrapper = shallow(<Form />);
    const now = moment();
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
});

test('should handle onFocusChange', () => {
    const wrapper = shallow(<Form />);
    const focused = true;
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<Form expense={expenses[0]} onSubmit={onSubmit} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmit).toHaveBeenLastCalledWith({
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        description: expenses[0].description,
        note: expenses[0].note,
    });
});