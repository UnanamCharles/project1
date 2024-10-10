import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { Inex } from './Components/inex';
import { Transactionlist } from './Components/Transactionlist';
import { Addtransaction } from './Components/Addtransaction';
import { GlobalProvider } from './context/Globalstate';
import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <Inex/>
        <Transactionlist/>
        <Addtransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
