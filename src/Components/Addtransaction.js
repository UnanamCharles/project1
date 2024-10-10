import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';

export const Addtransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === '' || amount.trim() === '') {
            // Optionally handle empty fields here, e.g., show a message
            return;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000000),
            text,
            amount: +amount
        };

        addTransaction(newTransaction);

        // Clear input fields after adding transaction
        setText('');
        setAmount('');
    };

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        type='text'
                        id='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Enter transaction..'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Amount<br />(negative-Expense, positive-income)</label>
                    <input
                        type='number'
                        id='amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder='Enter transaction amount..'
                    />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </>
    );
};

