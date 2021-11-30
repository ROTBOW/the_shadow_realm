import React, { useEffect, useState } from "react";
import './cards_index.scss';
import Loading from '../loading/loading';
import CardItem from './card_item';
import axios from 'axios';

const Card_Index = () => {

    const [meta, setMeta] = useState();
    const [cards, setCards] = useState();
    const [api, setApi] = useState('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')

    // useEffect(() => {
    //     axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
    //         .then(res => setCard(res.data))
    //     }, [])

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
                <button onClick={lastPage}>Last</button>
                <button onClick={nextPage}>Next</button>
            </div>
        )
    } else {
        return(<Loading/>)
    }
}

export default Card_Index;