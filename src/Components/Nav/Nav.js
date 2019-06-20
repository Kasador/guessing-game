import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <>
            <nav className="Nav">
                <h1 className="NavTitle">Guessing Game</h1>
                <h3 className="NumGuess">Total Guesses: 0</h3>
            </nav>
        </>
    );
}

export default Nav;