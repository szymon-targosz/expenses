import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
    onSubmit = expense => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    };

    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/dashboard');
    };

    render() {
        return (
            <div>
                EditExpense
                <Form onSubmit={this.onSubmit} expense={this.props.expense} />
                <button onClick={this.onRemove}>Remove Expense</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);