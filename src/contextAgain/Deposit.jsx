import React, { useContext, useState } from 'react'
import { BankAcc } from './Bank'

export default function Deposit() {
const { deposit, accOpen, submitted, toggleAccOpening, toggleDeposit, toggleSubmitted } = useContext(BankAcc);
const [money, setMoney] = useState(0);

const onclickToggle = (e) => {
    setMoney(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();

    toggleDeposit(money);
}

const handleSignout = (e) => {
    e.preventDefault();

    toggleSubmitted();
    toggleAccOpening();
}

  return (
    <div>
      { accOpen &&
        <>
            <div>
                <input type="number" value={money} onChange={onclickToggle} />
                <button type='Submit' onClick={handleSubmit}>Submit</button>
            </div>
            { submitted &&
            <div>
                Parul Depositted: {deposit}
                <div>
                    <button onClick={handleSignout}>SignOut</button>
                </div>
            </div>
            }
        </>
      }
    </div>
  )
}
