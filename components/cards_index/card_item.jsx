import React from 'react';
import { useNavigate } from 'react-router';
import './card_item.scss';

const CardItem = (props) => {
    const card = props.card;
    const navi = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navi(`cards/${card.id}`)
    }

    return (
        <div className="card-item" onClick={handleClick}>
            <img src={card.card_images[0].image_url}/>
            <p>{card.name} <br/> <i>{card.type}</i></p>
        </div>
    )
}

export default CardItem;