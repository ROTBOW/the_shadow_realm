import React from 'react';
import './show_card.scss';

const Card = (props) => {
    const card = props.cardData;
    window.card = card;
    // ● src={card.card_images[0].image_url}

    return (
        <div className="card-data-container">
            <div className="card-left-wing">
                <h2>{card.name}</h2>
                <h3>{card.type} {card.level}</h3>
                <p>{card.desc}</p>
            </div>
            <div className="card-right-wing">
                <img src={card.card_images[0].image_url} alt={card.name}/>
            </div>
        </div>
    )

}

export default Card;