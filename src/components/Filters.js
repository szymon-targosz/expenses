import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';


export class Filters extends React.Component {
    state = {
        calendarFocused: null
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSelectChange = (e) => {
        const val = e.target.value;
        if (val === 'date') {
          this.props.sortByDate();  
        } else if (val === 'amount') {
          this.props.sortByAmount();  
        };
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    render() {
        return (
            <div>
                <input 
                    type='text'
                    placeholder='Search'
                    value={this.props.filters.text}
                    onChange={this.onTextChange}    
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSelectChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId='start'
                    endDateId='end'
                    endDate={this.props.filters.endDate}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    onDatesChange={this.onDatesChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);