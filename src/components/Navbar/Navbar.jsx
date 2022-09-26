import React from 'react'
import './Navbar.css'
import {Cartwidget} from './Cartwidget'

const Navbar = () => {
  return (
    <ul>
        <li>Home</li>
        <li>Tienda</li>
        <li>Blog</li>
        <li>Contacto</li>
        <li><Cartwidget/></li>
    </ul>
  )
}

export default Navbar