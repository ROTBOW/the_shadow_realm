import React, { useEffect, useState } from "react";
import Loading from '../loading/loading'
import axios from "axios";
import './splash.scss'


const Splash = () => {
    const [card, setCard] = useState();
    const [flip, setFlip] = useState(false);
    const [angl, setAngl] = useState(0);
    let timerId;

    useEffect(() => {
        axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
            .then(res => setCard(res.data))
        }, [flip])

    
    useEffect(()=> {
        timerId = setInterval(()=>{
            setAngl( angl => (angl < 1440) ? angl+180: 0 );
            console.log(angl => (angl));
            if ([0, 180, 360, 720, 1400].includes(angl => angl)) {
                setFlip(flip => !flip);
            }
            
            // setAngl( angl => (angl < 540) ? angl+180: 0 );
        }, 5000);

        return () => clearInterval(timerId)
    }, [])

    
    if (card != undefined) {
        let cardImg = card.card_images[0].image_url
        return (
            <h1 className='splash'>
            <div className='center-box'>
                Welcome to the Shadow Realm

                <div className="splash-card-container">
                    <div className="splash-card-container-inner" style={{transform: `rotateY(${angl}deg)`}}>
                        <div className='splash-card-front'>
                            <img src={cardImg}/>
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
