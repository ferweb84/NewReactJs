import React, { useState } from 'react';
import Producto from '../Producto/Producto';
import './Productos.css'


const Productos = () => {
    const [Productos, setProductos ]= useState ([
        {id: 1, nombre: "Buzo Algodon", tipo: "Estampado Gris", cantidad: 10, precio: 1583, talle: "Large",img:'./images/buzoB.jpg'},
        {id: 2, nombre: "Buzo Algodon", tipo: "Estampado", cantidad: 12, precio: 1100, talle: "Large",img:'./images/buzoB2.jpg'},
        {id: 3, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 15, precio: 1200, talle: "Medium",img:'./images/buzoB3.jpg'},
        {id: 4, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 14, precio: 1400, talle: "Medium",img:'./images/buzo.webp'},  
        {id: 1, nombre: "Remera Algodon", tipo: "Estampado Gris", cantidad: 10, precio: 1583, talle: "Large",img:'./images/remera gris.webp'},
        {id: 2, nombre: "Remera Algodon", tipo: "Estampado", cantidad: 12, precio: 1100, talle: "Large",img:'./images/remera gris estampada.webp'},
        {id: 3, nombre: "Remera Algodon", tipo: "buzo", cantidad: 15, precio: 1200, talle: "Medium",img:'./images/remera moneda.webp'},
        {id: 4, nombre: "Remera Algodon", tipo: "buzo", cantidad: 14, precio: 1400, talle: "Medium",img:'./images/remeraa.webp'},      
    ]);
  return (
    <div className='Productos row '>
      {Productos.map((producto) =>{
        return(
        <Producto key={producto.id}  nombre={producto.nombre} tipo={producto.tipo} cantidad={producto.cantidad} precio={producto.precio} talle={producto.talle}  img={producto.img} />
        );
      })}
    </div>
  )
};

export default Productos;