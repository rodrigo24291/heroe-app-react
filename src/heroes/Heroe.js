import React from 'react'
import { useParams } from "react-router-dom";
import Getelementby from '../selector/getelementby';



export default function Heroe() {
    let params = useParams();
   
const publisher=Getelementby(params)
    return (
        <div>




{publisher.map(re=>{
               return( 



                <div className='card ms-3' style={{ maxWidth: 540 }}>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img src={`./heroe-app-react/heroesimg/${re.id}.jpg`} className='card-img' alt="" />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{re.superhero}</h5>
                            <p className='card-text'>{re.alter_ego}</p>
                            {(re.alter_ego!==re.characters)&&<p className='card-text'>{re.characters}</p>}
                            <p className='card-text'>
    
                                <small className='text-muted'>{re.first_appearance}</small>

                            </p>
                         
                        </div>
                    </div>
                    </div>
                    </div>
            







               )
            })}


        </div>
    )
}
