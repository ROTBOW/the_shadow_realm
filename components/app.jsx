import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// running components
import Navbar from './running_components/navbar/navbar';
import Footer from './running_components/footer/footer';


import Splash from './main_components/splash/splash_page';
import Card_Index from './card_components/cards_index/cards_index';
import RandomCard from './card_components/random_card/random_card';
import ShowCard from './card_components/show_card/show_card';
// import Search from './search/search'
import Jimbo from './main_components/jimbo/jimbo';


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
                    <Footer/>
                </div>
        )
    }
}

export default App;