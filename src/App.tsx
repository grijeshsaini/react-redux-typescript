import React, {useState} from 'react';
import './App.css';

function App() {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState('0');
    return (
        <div className="App">
            <div>
                <div className={"row"}>
                    <span className={"value"}>Balance: {balance}</span>
                </div>
                <div className={"row"}>
                    <input className={"textbox"} value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className={"row"}>
                    <button className={"button"}
                            onClick={() => setBalance(balance + (Number(amount) || 0))}>
                        Deposit Amount
                    </button>
                    <button className={"button"}
                            onClick={() => setBalance(balance - (Number(amount) || 0))}>
                        Withdraw Amount
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
