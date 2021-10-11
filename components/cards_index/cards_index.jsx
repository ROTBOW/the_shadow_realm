import React, { useEffect, useState } from "react";
import Loading from '../loading/loading'
import axios from 'axios'

const Card_Index = () => {

    const [card, setCard] = useState();

    useEffect(() => {
        axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
            .then(res => setCard(res.data))
        }, [])

    if (card != undefined) {
        return (
            <div>
                well well well, this is a lot of cards huh? {card.name}
            </div>
        )
    } else {
        return(<Loading/>)
    }
}

export default Card_Index;