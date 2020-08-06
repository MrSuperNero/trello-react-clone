import React from 'react';
import logo from '../assets/favicon-192.png';
import FontAwesome from 'react-fontawesome';


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
                <img src={logo} alt="logo" />
            </div>
        </header>
    );
}