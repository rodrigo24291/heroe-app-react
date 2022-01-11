import React, { useEffect } from 'react'
import { useState } from 'react'
import { Heroes } from '../data/data'
import { useNavigate  } from 'react-router-dom';
import queryString from 'query-string';
import { useLocation  } from 'react-router-dom';
import getbusqueda from '../selector/getbusqueda';



export default function Search() {
const [value, setvalue] = useState('')
const [states, setstate] = useState('')
const [resulado,setresultado]=useState([])
const history = useNavigate()
const localitacion=useLocation() 
const publisher=Heroes
const handelchange=(e)=>{
setvalue(e.target.value);
}
useEffect(() => {
    

    const {q=''}=queryString.parse(localitacion.search)
     setresultado(getbusqueda(q))
     console.log(resulado)
}, [states])

const handelsubmit=(e)=>{
e.preventDefault();
history({
search: `?q=${value}`})
setstate(value)
}
    return (
        <div className='container '>
            <div className='row mt-3'>

<div className='col-4'>
<form onSubmit={handelsubmit}>

    <input type='text' name="search" className='form-control' onChange={handelchange}/>
    <input type='submit' className='btn btn-primary mt-2' value='buscar'/>
</form>
</div>
<div className='col-8'>
{resulado.map(re=>{
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
            </div>
            
        </div>
    )
}
