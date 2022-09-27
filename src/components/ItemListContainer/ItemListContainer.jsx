import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {

  const onAdd= ()=>{   
        console.log ('se agrego al carrito')
  }

  return (
    <div>     
    <div className='propGreeting'>{greeting}</div>
    <ItemCount initial={1} stock={10} onAdd= {onAdd}/>
    </div>
  )
}

export default ItemListContainer