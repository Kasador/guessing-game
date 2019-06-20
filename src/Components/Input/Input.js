import React from 'react';
import './Input.css';

function Input() {
    return (
        <div className="Input">
            <form className="Form">
                <div className="Enter">
                    <input type="number" className="InputBox" />
                    <button className="InputBtn">enter</button>
                </div>
                <h3 class="EnterNumText">...enter your guess.</h3>
            </form>
        </div>
    );
}

export default Input;