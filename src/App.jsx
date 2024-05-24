import React from 'react';
import { BankAccount } from './context/BankAccount';
import BankVerification from './context/BankVerification';
import BankDeposit from './context/BankDeposit';

const App = () => {
  return (
    <BankAccount>
      <BankVerification />
      <BankDeposit />
    </BankAccount>
  )
};

export default App;