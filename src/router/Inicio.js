import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Navbar from '../component/navbar';
import Login from '../Login/Login';
import { Dc } from '../dc/dc';


import Marvel from '../marvel/Marvel'
import Heroe from '../heroes/Heroe';
import Search from '../component/search';

export const Inicio = () => {
    return (
        <>   
    <BrowserRouter>
    <Navbar/>

    <Routes>
    
    <Route exact path={'/login'} element={<Login/>} />

    <Route exact path={'/'}  element={<Marvel/>} />
    <Route exact path={'/marvel'}  element={<Marvel/>} />
<Route exact path={'/heroe/:id'} element={<Heroe/>} />
<Route exact path={'/DC'} element={<Dc/>} />
<Route exact path={'/Search'} element={<Search/>} />
    </Routes>      
    </BrowserRouter>
     
        </>
    )
}
