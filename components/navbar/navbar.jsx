import React from 'react'
import { withRouter } from 'react-router'
import './navbar.scss'

const Navbar = (props) => {

    const sendHome = (e) => {
        e.preventDefault()
        props.history.replace('/')
    }
    const sendHere = (loca) => {
        return e => {
            e.preventDefault()
            props.history.replace(`${loca}`)
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

export default withRouter(Navbar);