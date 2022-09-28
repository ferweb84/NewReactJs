import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import ItemCount2 from '../ItemCount2/ItemCount2';

import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

  const onAdd= (count)=>{   
        alert ('sumaste:' + count);
  }

  return (
    <div>     
    <div className='propGreeting'>{greeting}</div>
    <ItemCount initial={1} stock={10} onAdd= {onAdd}/>
    <ItemCount2 initial={1} stock={10} onAdd= {onAdd}/>
  
    </div>
  )
}

export default ItemListContainer