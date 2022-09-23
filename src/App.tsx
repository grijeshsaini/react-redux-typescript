import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <div className={"row"}>
                    <span className={"value"}>Balance: {10}</span>
                </div>
                <div className={"row"}>
                    <input className={"textbox"} value={0}/>
                </div>
                <div className={"row"}>
                    <button className={"button"}>Deposit Amount</button>
                    <button className={"button"}>Withdraw Amount</button>
                </div>
            </div>
        </div>
    );
}

export default App;
