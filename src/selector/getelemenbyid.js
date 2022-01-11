import { Heroes } from '../data/data'

export default function getelemenbyid(publisher) {
    const heroe=['Marvel Comics','DC Comics']
    if(!heroe.includes(publisher)){
        throw new Error('error en el publisher')
    }

    return Heroes.filter(ro=>ro.publisher==publisher)
}
