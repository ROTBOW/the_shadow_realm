import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './navbar/navbar'
import Splash from './splash/splash_page';
import Card_Index from './cards_index/cards_index';
import RandomCard from './random_card/random_card';
import ShowCard from './show_card/show_card';


class App extends React.Component {

    render(){
        return (
                <div>      
                    <Navbar data={undefined}/>
                    <Switch>
                        <Route path='/random' component={RandomCard}/>
                        <Route path='/cards/:id' component={ShowCard}/>
                        <Route path='/cards' component={Card_Index}/>
                        <Route path='/splash' component={Splash}/>
                        <Redirect to='/splash' />
                    </Switch>
                </div>
        )
    }
}

export default App;