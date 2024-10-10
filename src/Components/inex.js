
import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';

export const Inex = () => {
    const { transactions } = useContext(GlobalContext);

    if (!Array.isArray(transactions)) {
        return <div>Error: Transactions data is not available.</div>;
    }

    const amounts = transactions.map(transaction => transaction.amount);
    // const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0)
            .reduce((acc, item) => acc + item, 0) * -1
    ).toFixed(2);

    return (
        <div className='Inex-container'>
            <div>
                <h4>Income</h4>
                <p className='moneyplus'>{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className='moneyminus'>{expense}</p>
            </div>
        </div>
    );
};

