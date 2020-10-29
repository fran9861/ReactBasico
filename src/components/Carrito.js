import React from 'react';
import './carrito.css'
import Producto from './Producto';

const Carrito = ({carrito,agregarProductoCarrito}) => (
    <div className="carrito">
        <h2>
           tu carrito de compras
        </h2>
        {carrito.length === 0 
        ? 
        <p>no hay elementos en el carrito</p>
        : carrito.map(producto => (
            <Producto
            key={producto.id}
            producto ={producto}
            carrito = {carrito}
            agregarProductoCarrito={agregarProductoCarrito}
            />
        ))}
    </div>
);

export default Carrito;