import React from 'react';
import './Guess.css';
import Input from './Components/Input/Input';
import Nav from './Components/Nav/Nav';
import Computer from './Components/Computer/Computer';
import Tempature from './Components/Tempature/Tempature';

function Guess() {
    return (
        <div className="Guess">
            <Nav />
            <div className="GuessWrapper">
                <div className="RightLeft">
                    <div className="LeftSide">
                        <Computer />
                        <Input />
                    </div>
                    <Tempature />
                </div>
            </div>
        </div>
    );
}

export default Guess;