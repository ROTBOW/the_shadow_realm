import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import Search from '../search/search';
import './navbar.scss';

const Navbar = (props) => {
    const history = useHistory();
    const local = useLocation();
    const [search, setSearch] = useState('');


    const sendHere = (loca) => {
        return e => {
            e.preventDefault();
            if (loca === '/random' && local['pathname'] === '/random') {
                history.go(0);
            } else {
                history.replace(`${loca}`)
            }
        }
    }

    const clearSearch = () => {
        // console.log('clear console from navbar');
        setSearch('')

    }

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setSearch(e.target.value)
    }

    return (
        <div className="navbar">
            <h1 onClick={sendHere('/')}>The Shadow Realm</h1>
            <div>
                <button onClick={sendHere('/')}>Home</button>
                <button onClick={sendHere('/cards')}>All Cards</button>
                <button onClick={sendHere('/random')}>Random</button>
            </div>
            <div>
                <input
                    type="text"
                    name="search"
                    className='search'
                    onChange={handleChange}
                />
                {
                  (search != '') ? <Search term={search} clear={clearSearch} /> : ''
                }
            </div>
        </div>
    )
}

export default Navbar;