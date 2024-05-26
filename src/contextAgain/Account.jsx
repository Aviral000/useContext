import React, { useContext } from 'react'
import { BankAcc } from './Bank'

export default function Account() {
const { accOpen, toggleAccOpening } = useContext(BankAcc);

  return (
    <div>
      { !accOpen &&
      <div>
        Create the bank account for Parul
        <button type='submit' onClick={toggleAccOpening}>Open</button>
      </div>
      }
    </div>
  )
}
