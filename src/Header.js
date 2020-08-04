import React from 'react';
import logo from './assets/favicon-192.png'


export default function Header() {
    return (
        <header>
            <nav>
                <button>Home</button>
                <button>Profile</button>
            </nav>
            <h1>Trello Clone?</h1>
            <img src={logo} alt="logo" />
        </header>
    );
}