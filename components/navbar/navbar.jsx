import React from 'react'
import { useHistory } from 'react-router'
import './navbar.scss'

const Navbar = (props) => {
    const history = useHistory()

    const sendHome = (e) => {
        e.preventDefault()
        history.replace('/')
    }
    const sendHere = (loca) => {
        return e => {
            e.preventDefault()
            history.replace(`${loca}`)
        }
    }

    return (
        <div className="navbar">
            <div>
                <button onClick={sendHere('/')}>Home</button>
                <button onClick={sendHere('/cards')}>All Cards</button>
                <button onClick={sendHere('/random')}>Random</button>
            </div>
            <div>The Shadow Realm</div>
        </div>
    )
}

export default Navbar;