import React from 'react'
import { useCounter } from '../../hooks/useCounter'



const ItemCount2 = ({initial, stock, onAdd}) => {

const {counter, increment, decrement, reset}= useCounter (initial)

    return (
    <div>
        <h2>{counter}</h2>
        <button onClick={()=> increment(1, stock)}> + </button>
        <button onClick={()=> decrement(1, initial)}> - </button>
        <button onClick={reset}>Reset</button>   
        <button onClick={() =>onAdd(counter)}> Agregar al Carrito </button>            
    </div>
  )
}

export default ItemCount2