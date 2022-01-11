import React from 'react'
import {
useNavigate

} from "react-router-dom";

export default function Resultadospublisher({publisher}) {
   
   console.log(publisher); 
   const navigate=useNavigate()
 const  handelclic=(da)=>{

navigate(`/heroe/${da}`)
 }
    return (
        <>













<div className='row'>

            {publisher.map(re=>{
               return( 






<div className='col-12 col-md-4 col-lg-3'>
<div className="card my-3 " >
  <img src={`./heroe-app-react/heroesimg/${re.id}.jpg`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{re.superhero}</h5>
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item">{re.alter_ego}</li>
    <li className="list-group-item"><small className='text-muted'>{re.first_appearance}</small></li>
    
    <li className="list-group-item">{(re.alter_ego!==re.characters)&&<p className='card-text'>{re.characters}</p>}</li>
    
    <li  className='list-group-item' style={{ cursor: 'pointer',color:'blue'}} onClick={()=>{handelclic(re.id)}}>Ver mas</li>    
  </ul>
</div>
</div>
               )
            })}
            </div>
        </>
    )
}
