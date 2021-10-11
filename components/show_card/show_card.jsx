import React, {useEffect, useState} from 'react'
import Loading from '../loading/loading'
import Card from '../card/card'
import axios from 'axios'

const ShowCard = (props) => {
    const [card, setCard] = useState();

    useEffect(() => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${props.match.params.id}`)
        .then(res => setCard(res.data.data[0]))
    }, [])

    console.log(card)
    window.card = card;
    if (card != undefined){
        return <Card cardData={card}/>
    } else {
        return <Loading/>
    }
}

export default ShowCard;