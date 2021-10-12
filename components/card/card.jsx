import React from 'react';
import './card.scss';

const fillLvl = level => {
    let levels = []
    for (let i = 0; i < level; i++){
        levels.push(<img src={'../../assets/level_star.png'}
                         key={i}
                         title={`Level ${level}`}
                         />)
    }
    return levels;
}

const Card = (props) => {
    const card = props.cardData;
    let levels = fillLvl(card.level)
    
    let cardBar = [
        <div key='1'>{card.type}</div>,
        <div key='2' className="levels">{levels}</div>
    ]
    if (card.atk != undefined) {
        cardBar.push(<div key='3'>ATK/{card.atk}</div>)
        cardBar.push(<div key='4'>DEF/{card.def}</div>)
    }
    window.card = card;
    // ● src={card.card_images[0].image_url}
    // need to check what kind it is before it can try to render data
    // <img src={'../../assets/level_star.png'}/>


    return (
        <div className="card-data-container">
            <div className="card-left-wing">
                <h2>{card.name}<br/><i>{card.race}</i></h2>
                <div className="card-bar">
                    {cardBar}
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