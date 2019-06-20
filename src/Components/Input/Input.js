import React from 'react';
import './Input.css';

function Input() {
    return (
        <div className="Input">
            <form className="Form">
                <h3 class="EnterNumText">enter your number...</h3>
                <div className="Enter">
                    <input type="number" className="InputBox" />
                    <button className="InputBtn">Enter</button>
                </div>
            </form>
        </div>
    );
}

export default Input;