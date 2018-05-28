import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = e => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = e => {
        const amount = e.target.value;     
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        };
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        };
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf(),
                amount: parseFloat(this.state.amount, 10) * 100,
            });
        };
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="text" 
                    value={this.state.description} 
                    placeholder='Description' 
                    onChange={this.onDescriptionChange}
                    autoFocus
                />
                <input 
                    type="text" 
                    value={this.state.amount} 
                    placeholder='Amount' 
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea 
                    value={this.state.note}
                    placeholder='Add a note (optional)' 
                    onChange={this.onNoteChange}
                ></textarea>
                <button>Save Expense</button>
            </form>
        );
    }
}