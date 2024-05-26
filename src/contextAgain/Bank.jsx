import React, { createContext, useState } from 'react'

const BankAcc = createContext();

function Bank({ children }) {
    const [deposit, setDeposit] = useState(0);
    const [accOpen, setAccOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggleAccOpening = () => {
        setAccOpen(!accOpen);
    }

    const toggleDeposit = (money) => {
        setDeposit(prev => parseInt(prev) + parseInt(money));
        setSubmitted(!submitted);
    }

    const toggleSubmitted = () => {
        setSubmitted(!submitted);
    }

    return (
    <div>
        <BankAcc.Provider value={{ deposit, accOpen, submitted, toggleAccOpening, toggleDeposit, toggleSubmitted }}>
        {children}
        </BankAcc.Provider>
    </div>
    )
}

export { Bank, BankAcc };