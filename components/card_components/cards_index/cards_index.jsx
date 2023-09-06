import React, { useEffect, useState } from "react";
import './cards_index.scss';
import Loading from '../../util_components/loading/loading';
import CardItem from './card_item';
import axios from 'axios';

const Card_Index = () => {

    const [meta, setMeta] = useState();
    const [cards, setCards] = useState();
    const [api, setApi] = useState('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')

    useEffect(()=>{
        axios.get(api)
            .then(res => {
                setCards(res.data.data)
                setMeta(res.data.meta)
            })
    },[api])

    const nextPage = () => {
        setApi(meta.next_page)
    }

    const lastPage = () => {
        if (meta.previous_page != undefined) {
            setApi(meta.previous_page)
        }
    }

    const changePage = direction => {
        return (e) => {
            if (direction === 'back' && meta.previous_page != undefined) {
                setApi(meta.previous_page)
            } else if (direction === 'next') {
                setApi(meta.next_page)
            }
        }
    }

    if (cards != undefined) {
        let cardItems = []
        for (let i = 0; i < cards.length;i++ ) {
            cardItems.push(
                <CardItem
                    card={cards[i]}
                    key={i}
                />)
        }
        return (
            <div className="cards-index">
                <div className="cards-index-container">
                    {cardItems}
                </div>
                <div className="cards-index-buttons">
                    <button onClick={changePage('back')}>Last</button>
                    <button onClick={changePage('next')}>Next</button>
                </div>
            </div>
        )
    } else {
        return(<Loading/>)
    }
}

export default Card_Index;