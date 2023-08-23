import React from 'react';
import Image from '../image/image';
import './card.scss';

const fillLvl = level => {
    let levels = []
    for (let i = 0; i < level; i++){
        levels.push(<img src={'../../assets/imgs/level_star.png'}
                         key={i}
                         title={`Level ${level}`}
                         />)
    }
    return levels;
}

const formatDesc = desc => {
    let answer = [];
    let tempStr = ''
    for (let i = 0; i < desc.length; i++) {
        let letter = desc[i];
        if (letter != '●'){
            tempStr += letter
        } else {
            answer.push(tempStr);
            answer.push(<br key={i}/>)
            tempStr = '●';

        }
    }
    answer.push(tempStr)

    return answer;
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
                <p>{formatDesc(card.desc)}</p>
            </div>
            <div className="card-right-wing">
                {/* <img src={card.card_images[0].image_url} alt={card.name}/> */}
                <div className="card-image">
                    <Image
                        imageUrl={card.card_images[0].image_url}
                        imageName={card.name}
                        />
                </div>
            </div>
        </div>
    )

}

export default Card;