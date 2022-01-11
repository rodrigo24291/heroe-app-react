import React from 'react'
import Resultadospublisher from '../component/Resultadospublisher'
import getelemenbyid from '../selector/getelemenbyid'

export const Dc = () => {
    const re=getelemenbyid('DC Comics')
    return (
        <div>
            <h1 className='text-center'>Dc</h1>
            <div className='container animate__animated animate__fadeIn'>
            <Resultadospublisher publisher={re}/>
            </div>
        </div>
    )
}
