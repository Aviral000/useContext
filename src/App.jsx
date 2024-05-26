import React from 'react';
// import { BankAccount } from './context/BankAccount';
// import BankVerification from './context/BankVerification';
// import BankDeposit from './context/BankDeposit';
// import CallBack from './callback/CallBack';
// import Counter from './reducer/Reducer';
// import UseLayoutEffect from './layouteffect/UseLayoutEffect';

import { Bank, BankAcc } from './contextAgain/Bank';
import Account from './contextAgain/Account';
import Deposit from './contextAgain/Deposit';

const App = () => {
  return (
    <div>
      {/* <CallBack /> */}
      {/* <Counter /> */}
      {/* <BankAccount>
        <BankVerification />
        <BankDeposit />
      </BankAccount> */}
      {/* <UseLayoutEffect /> */}
      <Bank>
        <Account />
        <Deposit />
      </Bank>
    </div>
  )
};

export default App;