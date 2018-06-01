import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expensesWithFilters';

export const List = (props) => (
    <div>
        {props.expenses.length === 0 ? (
            <div>no expenses</div>
        ) : (
            props.expenses.map(expense => <ListItem key={expense.id} {...expense} />)
        )}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(List);