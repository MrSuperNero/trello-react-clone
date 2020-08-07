import React from 'react';
import logo from '../assets/favicon-192.png';
import FontAwesome from 'react-fontawesome';
import '../css/header.css'


export default function Header(props) {
    return (
        <header>
            <nav>
                <button onClick={props.handleAdd}>
                    <FontAwesome
                        id="plus"
                        name="plus"
                        /> 
                    <p>Task List</p>
                </button>
            </nav>

            <div className="title-wrapper">
                <h1>Trello Clone?</h1>
            </div>

            <div className="img-wrapper">
                <a href="www.github.com/MrSuperNero">
                    <img src={logo} alt="logo" />
                </a>
            </div>
        </header>
    );
}