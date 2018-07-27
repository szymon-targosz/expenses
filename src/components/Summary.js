import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expensesWithFilters';
import computeSum from '../selectors/expensesTotal';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export const Summary = ({ expensesSum, expensesCount, expensesHidden }) => {
    const matchingWord = expensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing <span>{expensesCount}</span> {matchingWord} totalling <span>{numeral(expensesSum / 100).format('$0,0.00')}</span></h1>
                {expensesHidden !== 0 && <p className='page-header__info'>Hidden expenses: {expensesHidden}</p>}
                <div className="page-header__action">
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    const selectedExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesSum: computeSum(selectedExpenses),
        expensesCount: selectedExpenses.length,
        expensesHidden: state.expenses.length - selectedExpenses.length
    };
};

export default connect(mapStateToProps)(Summary);