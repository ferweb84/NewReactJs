import React from 'react';
import './Producto.css';

const Producto = (props) => {
  return (
    <div className='Producto'> 
        <div>{props.id}</div>
        <h1>{props.nombre}</h1>
        <p>Tipo:{props.tipo}</p>
        <p>Cantidad en Stock {props.cantidad} unidades</p>
        <p>Precio:{props.precio}</p>
        <p>Talle {props.talle}</p>
        <img src = {props.img} className='img'/>
    </div>
  )
}

export default Producto;