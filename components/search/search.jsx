import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import SearchItem from './search_item'
import axios from 'axios';
import './search.scss';

const Search = (props) => {
    const [cards, setCards] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0&fname=${props.term}`)
            .then(res => setCards(res.data.data))
    }, [props.term])


    if (cards != null) {
        // console.log(cards)
        return (
            <ul className="search-container">
                {
                    cards.map(card => (
                        <SearchItem
                            card={card}
                            key={card.id}
                            clear={props.clear}
                        />
                    ))
                }
            </ul>
        )
    } else {
        return (<div>loading...</div>)
    }

}

export default Search;