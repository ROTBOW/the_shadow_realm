import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Splash from './splash/splash_page';


class App extends React.Component {

    render(){
        return (
                <div>      

                    <Route path='/splash' component={Splash}/>
                    <Redirect to='/splash' />
                    
                </div>
        )
    }
}

export default App;