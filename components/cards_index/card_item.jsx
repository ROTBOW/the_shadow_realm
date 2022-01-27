import React from 'react';
import { useHistory } from 'react-router';
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
            <img src={card.card_images[0].image_url}/>
            <p>{card.name} <br/> <i>{card.type}</i></p>
        </div>
    )
}

export default CardItem;