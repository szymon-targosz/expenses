import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expensesWithFilters';

export const List = (props) => (
    <div className='content-container'>
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expenses</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {props.expenses.length === 0 ? (
                <div className='list-item list-item--message'>
                    <span>no expenses</span>
                </div>
            ) : (
                    props.expenses.map(expense => <ListItem key={expense.id} {...expense} />)
                )}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(List);