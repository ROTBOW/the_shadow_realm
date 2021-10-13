import React, {useEffect, useState} from 'react';
import {GiMagnifyingGlass} from "react-icons/gi";
import './image.scss';

const Image = (props) => {
    const imageUrl = props.imageUrl;
    const imageName = props.imageUrl;
    const [zoomed, setZoomed] = useState(false);
    const [bigPic, setBigPic] = useState([]);

    const handleClick = e => {
        e.preventDefault();
        setZoomed(!zoomed);
    }

    useEffect(() => {
        if (zoomed === true){
            setBigPic([
                <div className="zoomed" key="0">
                    <img
                        src={imageUrl}
                        alt={imageName}
                        className="zoomed-img"
                    />
                </div>,
                <div className='greyout' key="1"/>
            ])
        } else {
            setBigPic([]);
        }

    }, [zoomed])

    return (
        <div className="image-container" onClick={handleClick}>
            <img
                src={imageUrl}
                alt={imageName}
            />
            <GiMagnifyingGlass/>

            {bigPic}
        </div>
    )

}

export default Image;