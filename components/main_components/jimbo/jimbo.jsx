import React, {useEffect} from 'react';
import './jimbo.scss'

const playAudio = () => {
    new Audio('../../assets/audio/Jimbo.mp3').play()
}

const Jimbo = () => {

    return(
        <div className='Jimbo'>
            <img
                src={'../../assets/imgs/Jimbo.jpg'}
                alt='Jimbo Easter Egg'
            />
            <button id="btnSound" onClick={playAudio}>Play Audio</button>
        </div>
    )
}

export default Jimbo;