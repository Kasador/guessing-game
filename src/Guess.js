import React from 'react';
import './Guess.css';
import Input from './Components/Input/Input';
import Nav from './Components/Nav/Nav';

function Guess() {
    return (
        <div className="Guess">
            <Nav />
            <Input />
        </div>
    );
}

export default Guess;