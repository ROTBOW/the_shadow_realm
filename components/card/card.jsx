import React from 'react';
import './card.scss';

const Card = (props) => {
    const card = props.cardData;
    let levels = [];
    for (let i = 0; i < card.level; i++){
        levels.push(<img src={'../../assets/level_star.png'}/>)
    }
    window.card = card;
    // ● src={card.card_images[0].image_url}
    // need to check what kind it is before it can try to render data
    // <img src={'../../assets/level_star.png'}/>


    return (
        <div className="card-data-container">
            <div className="card-left-wing">
                <h2>{card.name}</h2>
                <div className="card-bar">
                    <div>{card.type}</div>
                    <div className="levels">{levels}</div>
                    <div>ATK/{card.atk}</div>
                    <div>DEF/{card.def}</div>
                </div>
                <p>{card.desc}</p>
            </div>
            <div className="card-right-wing">
                <img src={card.card_images[0].image_url} alt={card.name}/>
            </div>
        </div>
    )

}

export default Card;