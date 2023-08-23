import React from 'react';
import './loading.scss'
import { GiCardExchange } from "react-icons/gi";

class Loading extends React.Component {
    render(){
        return (
            <div className="loading">
                <GiCardExchange/>
                <p>Loading...</p>
            </div>
        )
    }
}

export default Loading;