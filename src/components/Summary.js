import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expensesWithFilters';
import computeSum from '../selectors/expensesTotal';

export const Summary = ({ expensesSum, expensesCount }) => {
    const matchingWord = expensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>Viewing <span>{expensesCount}</span> {matchingWord} totalling <span>{expensesSum}</span></h1>
        </div>
    );
};

const mapStateToProps = state => {
    const selectedExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesSum: computeSum(selectedExpenses),
        expensesCount: selectedExpenses.length 
    };
};

export default connect(mapStateToProps)(Summary);