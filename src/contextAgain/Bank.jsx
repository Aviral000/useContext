import React, { createContext, useState } from 'react'

const BankAcc = createContext();

function Bank({ children }) {
const [deposit, setDeposit] = useState(0);
const [accOpen, setAccOpen] = useState(false);

const toggleAccOpening = () => {
    setAccOpen(!accOpen);
}

const toggleDeposit = (money) => {
    setDeposit((prev) => prev.deposit + money);
}

  return (
    <div>
      <BankAcc.Provider value={{ deposit, accOpen, toggleAccOpening, toggleDeposit }}>
        {children}
      </BankAcc.Provider>
    </div>
  )
}

export { Bank, BankAcc };