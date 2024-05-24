import React, { useContext, useEffect } from 'react'
import { BankAcc } from './BankAccount'

export default function BankDeposit() {
  const contextValue = useContext(BankAcc);
  const { accOpen, deposit, money, handleAccOpening, handleMoneyAvail } = contextValue;

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleAccOpening();
      handleMoneyAvail();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [handleAccOpening, handleMoneyAvail]);

  return (
    <div>
      {accOpen && money && (
        <div>
          <h1>You have ${deposit} in your deposit Account</h1>
        </div>
      )}
    </div>
  )
}