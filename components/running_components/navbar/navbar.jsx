import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import Search from '../../main_components/search/search';
import './navbar.scss';

const Navbar = (props) => {
    const navi = useNavigate();
    const local = useLocation();
    const [search, setSearch] = useState('');


    const sendHere = (loca) => {
        return e => {
            e.preventDefault();
            if (loca === '/random' && local['pathname'] === '/random') {
                navi(0);
            } else {
                navi(`${loca}`)
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