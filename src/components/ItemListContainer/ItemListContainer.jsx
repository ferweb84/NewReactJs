import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
  return (
    <div className='propGreeting'>
      {greeting}
    </div>
  )
}

export default ItemListContainer