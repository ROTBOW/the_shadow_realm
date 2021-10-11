import React from 'react';
import './loading.scss'
import { GiCardExchange } from "react-icons/gi";

class Loading extends React.Component {
    render(){
        return (
            <div className="loading">Loading...<GiCardExchange/></div>
        )
    }
}

export default Loading;