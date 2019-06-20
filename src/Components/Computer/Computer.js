import React from 'react';
import './Computer.css';

function Computer() {
    return (
        <div className="Computer">
           <div className="GuessBox">
               <span>&#63;</span>
           </div>
           <span className="ComputerGuested">...computer's guess.</span>
        </div>
    );
}

export default Computer;