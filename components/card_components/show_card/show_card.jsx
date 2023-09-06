import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Loading from '../../util_components/loading/loading';
import Card from '../card/card';
import axios from 'axios';

const ShowCard = (props) => {
    const [card, setCard] = useState();
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
        .then(res => setCard(res.data.data[0]))
    }, [id])

    if (card != undefined){
        return <Card cardData={card}/>
    } else {
        return <Loading/>
    }
}

export default ShowCard;