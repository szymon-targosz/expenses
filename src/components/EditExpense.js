import React from 'react';

export default class EditExpense extends React.Component {
    render() {
        return (
            <div>
                EditExpense page! Id number {this.props.match.params.id}.
            </div>
        );
    }
}