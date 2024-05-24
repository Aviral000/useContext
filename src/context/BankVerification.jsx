import React, { useContext, useState } from 'react'
import { BankAcc } from './BankAccount'

export default function BankVerification() {
const { accOpen, money, handleAccOpening, handleDeposit, handleMoneyAvail } = useContext(BankAcc);
const [ amount, setAmount ] = useState(0);

const handleOnChange = (e) => {
    setAmount(e.target.value);
}

const handleRedirect = (e) => {
    e.preventDefault();
    handleDeposit(amount);
    handleMoneyAvail();
    setAmount(0);
}

  return (
    <div>
      { !accOpen ? (
        <>
            <h1>Create a Bank Account:</h1>
            <button onClick={handleAccOpening}>bank account</button>
        </>
      ) : (
        <> {
        !money && (
            <>
                <h1>Please enter some amount to deposit:</h1>
                <input type="number" value={amount} onChange={handleOnChange} />
                <button type='submit' onClick={handleRedirect}>Add Deposit</button>
            </>
            )
        }
        </>
      )
      }
    </div>
  )
}
