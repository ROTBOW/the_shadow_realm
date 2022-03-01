import React from "react";
import { useHistory } from "react-router";

const SearchItem = (props) => {
    const history = useHistory();


    const handleClick = (e) => {
        e.preventDefault();
        props.clear()
        history.replace(`/cards/${props.card.id}`)
    }

    // console.log(props.card)
    return (
        <li className="search-item" onClick={handleClick}>
            {props.card.name}
        </li>
    )
}

export default SearchItem;