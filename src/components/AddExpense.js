import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
    onSubmit = expense => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                AddExpense
                <Form onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addExpense: expense => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);