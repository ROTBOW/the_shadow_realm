import React from 'react';
import { useHistory } from 'react-router'
import './card_item.scss';

const CardItem = (props) => {
    const card = props.card;
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push(`cards/${card.id}`)
    }

    return (
        <div className="card-item" onClick={handleClick}>
            <p>{card.name} <br/> {card.type}</p>
        </div>
    )
}

export default CardItem;