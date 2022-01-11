import { Heroes } from "../data/data"

export default function Getelementby({id}) {
  
    return Heroes.filter(todo=>todo.id===id)
}
