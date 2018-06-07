import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
    onSubmit = expense => {
        this.props.startAddExpense(expense);
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
    startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);