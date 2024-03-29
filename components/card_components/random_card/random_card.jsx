import React, { useEffect, useState } from "react";
import Loading from '../../util_components/loading/loading'
import Card from '../card/card'
import axios from 'axios'

const RandomCard = () => {
    const [card, setCard] = useState();

    useEffect(() => {
        axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
            .then(res => setCard(res.data))
        }, [])

    if (card != undefined) {
        return (
            <Card cardData={card}/>
        )
    } else {
        return(<Loading/>)
    }
}

export default RandomCard;