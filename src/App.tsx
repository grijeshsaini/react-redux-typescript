import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {depositAmount, withdrawAmount} from "./action";

function App() {
    const balance = useSelector((state: RootState) => state.balance.balance || 0);
    const [amount, setAmount] = useState('0');
    const dispatch = useDispatch();
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
                    <button className={"button"} onClick={() => dispatch(depositAmount(Number(amount)))}>Deposit Amount</button>
                    <button className={"button"} onClick={() => dispatch(withdrawAmount(Number(amount)))}>Withdraw Amount</button>
                </div>
            </div>
        </div>
    );
}

export default App;
