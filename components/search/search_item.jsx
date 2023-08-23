import React from "react";
import { useNavigate } from "react-router";

const SearchItem = (props) => {
    const navi = useNavigate();


    const handleClick = (e) => {
        e.preventDefault();
        props.clear()
        navi(`/cards/${props.card.id}`)
    }

    // console.log(props.card)
    return (
        <li className="search-item" onClick={handleClick}>
            {props.card.name}
        </li>
    )
}

export default SearchItem;