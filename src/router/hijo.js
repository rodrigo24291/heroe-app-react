import React from 'react'
import heroe from '../heroes/heroe'
import Marvel from '../marvel/Marvel'
import {
    Route
  } from "react-router-dom";
import { Dc } from '../dc/dc';

export default function Hijo() {
    return (
        <div>
               F

<Route exact path={'/marvel'}  element={<Marvel/>} />
<Route exact path={'/heroe/:id'} element={heroe} />
<Route exact path={'/DC'} element={<Dc/>} />

 
        </div>
    )
}
