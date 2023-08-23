import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import Loading from '../loading/loading'
import axios from "axios";
import './splash.scss';


const Splash = () => {
    const [card, setCard] = useState();
    const [flip, setFlip] = useState(false);
    const [angl, setAngl] = useState(0);
    const navi = useNavigate();
    let timerId;

    useEffect(() => {
        axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
            .then(res => setCard(res.data))
        }, [flip])

    
    useEffect(()=> {
        timerId = setInterval(()=>{
            let time;
            setAngl( angl => {
                time = (angl < 1440) ? angl+180: 0
                return time
            });
            if (![360, 720, 1080, 1440].includes(time)) {
                setFlip(flip => !flip);
            }
            
        }, 2500);

        return () => clearInterval(timerId)
    }, [])

    const goToCard = (e) => {
        e.preventDefault();
        navi(`cards/${card.id}`)
    }

    
    if (card != undefined) {
        let cardImg = card.card_images[0].image_url
        return (
        <h1 className='splash'>
            <div className='center-box'>
                <div className="splash-text-box">
                    <h2>Welcome to the Shadow Realm</h2>
                    <p>
                        The Shadow Realm is a Yu-Gi-Oh card repository made possible
                        by the <a href='https://db.ygoprodeck.com/'>YGOPRODeck</a> API.
                    </p>
                </div>
                <div className="splash-card-container">
                    <div className="splash-card-container-inner" style={{transform: `rotateY(${angl}deg)`}}>
                        <div className='splash-card-front'>
                            <img src={cardImg}
                                onClick={goToCard}/>
                        </div>
                        <div className='splash-card-back'>
                            <img src={'../../assets/imgs/card_back.jpg'}/>
                        </div>
                    </div>
                </div>

            </div>
        </h1>
        )
    } else {
        return(<Loading/>)
    }

}

export default Splash;
