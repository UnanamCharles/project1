// import React, { createContext, useReducer } from "react";
// import { AddReducer } from "./AddReducer";

// // Initial state
// const initialState = {
//     transactions: [
//         { id: 1, text: 'Food', amount: -20 },
//         { id: 2, text: 'Salary', amount: 300 },
//         { id: 3, text: 'Book', amount: -10 },
//         { id: 4, text: 'Camera', amount: 150 }
//     ]
// };

// // Create context
// export const GlobalContext = createContext();

// // Provider component
// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AddReducer, initialState);

//     return (
//         <GlobalContext.Provider value={{
//             transactions: state.transactions,
//             dispatch
//         }}>
//             {children}
//         </GlobalContext.Provider>
//     );
// };

import React, { createContext, useReducer } from "react";
import AddReducer from "./AddReducer";  // Corrected import statement

// Initial state
const initialState = {
    transactions: [
    ]
};

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddReducer, initialState);


    // actions
    function  Transaction(id){
        dispatch({
            type:'REMOVE_TRANSACTION',
            payload: id
        });
    } 
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    } 

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
