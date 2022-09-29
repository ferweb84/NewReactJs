import React from 'react'
import Item from '../Item/Item'

const ItemList = ({info}) => {
  return (
    <div className='stiloCard'>
        {info?.map((prod)=><Item key={prod.id} prod ={prod}/>)}
    </div>
  )
}

export default ItemList