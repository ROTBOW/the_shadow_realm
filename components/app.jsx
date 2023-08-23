import React from 'react';
import { Route, Routes, Redirect, Navigate } from 'react-router-dom';

import Navbar from './navbar/navbar'
import Splash from './splash/splash_page';
import Card_Index from './cards_index/cards_index';
import RandomCard from './random_card/random_card';
import ShowCard from './show_card/show_card';
// import Search from './search/search'
import Jimbo from './jimbo/jimbo';


class App extends React.Component {

    render(){
        return (
                <div>      
                    <Navbar/>
                    <Routes>
                        <Route path='/jimbo' element={<Jimbo/>}/>
                        <Route path='/random' element={<RandomCard/>}/>
                        <Route path='/cards/:id' element={<ShowCard/>}/>
                        <Route path='/cards' element={<Card_Index/>}/>
                        {/* <Route path='/search/:searchWords' element={<Search/>}/> */}
                        <Route path='/splash' element={<Splash/>}/>
                        <Route path="*" element={ <Navigate to='/splash' replace/>}/>
                    </Routes>
                </div>
        )
    }
}

export default App;