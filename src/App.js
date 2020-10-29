import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  // crear listado de productos sin api en un arreglo state
  const [ productos , guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa', precio: 50 },
    { id: 2, nombre: 'Pantalon', precio: 700 },
    { id: 3, nombre: 'Pantaloneta', precio: 100 },
    { id: 4, nombre: 'Zapatos', precio: 250 },
  ]);

  //state para un carrito de compras
  const [carrito, agregarProductoCarrito] = useState([]);

  //obtener la fecha 
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
       <Header 
          titulo = "Tienda Virtual"
       />
       <h1>Lista de productos</h1>
       {productos.map(producto => 
        <Producto 
          key={producto.id}
          producto={producto}
          productos = {productos}
          carrito={carrito}
          agregarProductoCarrito ={agregarProductoCarrito}
        />
       )}
       <Carrito 
          carrito={carrito}
          agregarProductoCarrito={agregarProductoCarrito}
       />
      <Footer
        fecha={fecha}
        />
    </Fragment>           
  );
}

export default App;
