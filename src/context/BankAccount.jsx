import React, { useState, createContext } from 'react'

const BankAcc = createContext();

function BankAccount({ children }) {
const [accOpen, setAccOpen] = useState(false);
const [deposit, setDeposit] = useState(0);
const [money, setMoney] = useState(false);

const handleAccOpening = () => setAccOpen(!accOpen);
const handleDeposit = (amount) => setDeposit(prevDeposit => prevDeposit + parseInt(amount));
const handleMoneyAvail = () => setMoney(!money);

  return (
    <BankAcc.Provider value={{ accOpen, deposit, money, handleDeposit, handleAccOpening, handleMoneyAvail }}>
      {children}
    </BankAcc.Provider>
  )
}


export { BankAcc, BankAccount };