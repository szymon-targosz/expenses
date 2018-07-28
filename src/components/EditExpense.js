import React from 'react';
import Form from './Form';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component {

    state = {
        isOpen: false
    };

    onSubmit = expense => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    };

    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.closeApproval();
        this.props.history.push('/dashboard');
    };

    openApproval = () => {
        this.setState(() => ({ isOpen: true }));
    }

    closeApproval = () => {
        this.setState(() => ({ isOpen: false }));
    }

    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <Form onSubmit={this.onSubmit} expense={this.props.expense} />
                    <button className='button' onClick={this.openApproval}>Remove Expense</button>
                    <Modal
                        ariaHideApp={false}
                        contentLabel='Confirmation of removal'
                        closeTimeoutMS={250}
                        isOpen={this.state.isOpen}
                        onRequestClose={this.closeApproval}
                        className='modal'
                    >
                        <h4 className='modal__title'>Are you sure you want to delete this expense?</h4>
                        <button className='button button--remove' onClick={this.onRemove}>Yes, remove it</button>
                    </Modal>
                </div>
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