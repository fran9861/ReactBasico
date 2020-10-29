import React from 'react';

const Producto = ({producto, carrito, agregarProductoCarrito, productos}) => {
    const {nombre, precio, id} = producto;

    // agregar un producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id);
        console.log(producto[0]);
        agregarProductoCarrito([
            ...carrito, producto[0]
        ]);
    }
    //eliminar un producto del carrito 
    const eliminarProducto= (id) => {
        const productos = carrito.filter(producto => producto.id !== id);
        agregarProductoCarrito(
            productos
        )
    }
    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
           
            {productos 
            ?
                (   <button 
                        type="button"
                        onClick={ () => seleccionarProducto(id) }
                    >Comprar</button>
                )
            : 
                (   <button 
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                    >Eliminar</button>
                )
            }
        </div>
    );
};

export default Producto;