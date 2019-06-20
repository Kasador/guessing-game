import React from 'react';
import './Tempature.css';

function Tempature() {
    return (
        <div className="Tempature">
            <div className="TempTabs">
                <span>You're on fire!</span>
                <span>Warmer</span>
                <span>Warm</span>
                <span>Cold</span>
                <span>Colder</span>
                <span>You're frozen!</span>
            </div>
            <span className="HowClose">...how close you are.</span>
        </div>
    );
}

export default Tempature;