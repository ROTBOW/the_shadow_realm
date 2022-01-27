import React from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import './navbar.scss';

const Navbar = (props) => {
    const history = useHistory();
    const local = useLocation();

    const sendHere = (loca) => {
        return e => {
            e.preventDefault()
            if (loca === '/random' && local['pathname'] === '/random') {
                history.go(0);
            } else {
                history.replace(`${loca}`)
            }
        }
    }

    return (
        <div className="navbar">
            <h1 onClick={sendHere('/')}>The Shadow Realm</h1>
            <div>
                <button onClick={sendHere('/')}>Home</button>
                <button onClick={sendHere('/cards')}>All Cards</button>
                <button onClick={sendHere('/random')}>Random</button>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar;