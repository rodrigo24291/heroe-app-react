import React from 'react'
import Resultadospublisher from '../component/Resultadospublisher'
import getelemenbyid from '../selector/getelemenbyid'

export default function Marvel() {
    
    const re=getelemenbyid('Marvel Comics')
    return (
        <div>
            <h1 className='text-center'>Marvel</h1>
            <div className='container animate__animated animate__fadeIn'>
            <Resultadospublisher publisher={re}/>
            </div>
            </div>
        
    )
}
