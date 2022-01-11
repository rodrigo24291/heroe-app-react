import React from 'react'
import { Heroes } from '../data/data'

export default function getbusqueda(resultado) {
    
    return Heroes.filter(busqueda=>busqueda.superhero.includes(resultado))
}
