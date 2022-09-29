import React, {useEffect, useState} from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import ItemCount2 from '../ItemCount2/ItemCount2';
import './ItemListContainer.css'



const ItemListContainer = ({greeting}) => {

  const[data, setData]=useState([])

  const productos = [
    {id: 1, nombre: "Buzo Algodon", tipo: "Estampado Gris", cantidad: 10, precio: 1583, talle: "Large",img:'https://www.zorzal-criollo.com.ar/products-page/boinas-vascas-gorras-inglesagolfcubana/'},
    {id: 2, nombre: "Buzo Algodon", tipo: "Estampado", cantidad: 12, precio: 1100, talle: "Large",img:'https://m.media-amazon.com/images/I/51mbiqDQnIS.jpg'},
    {id: 3, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 15, precio: 1200, talle: "Medium",img:'https://picsum.photos/id/237/536/354'},
    {id: 4, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 14, precio: 1400, talle: "Medium",img:'./img/buzo.webp'},  
  ]

  const task = new Promise((res, rej)=>{
    setTimeout(()=>{
      res(productos)
    },2000)
  })

/*  const fetchData = async ()=>{
  try {
      let res = await task
      setData(res)
      } catch(error) {
          console.log(error)
  }*/


useEffect(()=>{
    task
         .then(res => setData (res))
         .catch(error=> console.log(error))
  // fetchData()

},[])

console.log(data)
  
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