import React from 'react';
import { BankAccount } from './context/BankAccount';
import BankVerification from './context/BankVerification';
import BankDeposit from './context/BankDeposit';
import CallBack from './callback/CallBack';
import Counter from './reducer/Reducer';

const App = () => {
  return (
    <div>
      {/* <CallBack /> */}
      <Counter />
      {/* <BankAccount>
        <BankVerification />
        <BankDeposit />
      </BankAccount> */}
    </div>
  )
};

export default App;