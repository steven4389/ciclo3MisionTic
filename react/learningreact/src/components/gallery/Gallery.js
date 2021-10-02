import React, { useState, useEffect } from 'react'
import './gallery.css'
import { products } from '../../data/products'

const Gallery = ({ keyword }) => {
    const [productos, setProductos] = useState(products)

    /*este Hook esta pendiente de 
    cuando cambie el state keyword*/
    useEffect(() => {
        if (keyword !== "") {
            console.log('keyword', keyword);
            let producto = products.find(product => product.nombre.match(keyword));

            //if else con operador ternario
            producto !== undefined ? setProductos([producto]) : setProductos([]);

        } else {
            setProductos(products);
        }
    }, [keyword])



    return (
        <div className="galleryComponent">
            {(productos !== undefined && productos.length > 0) ?
                productos.map(item => {
                    return (<div className="itemProduct">
                        <div><strong>Nombre:</strong> {item.nombre}</div>
                        <div><strong>Precio:</strong> {item.precio}</div>
                        <div><strong>Calificación:</strong> {item.calificacion}</div>
                    </div>);
                }) :
                productos !== undefined ?
                    <div>
                        Ningun producto coincide con la busqueda
                    </div>
                    :
                    <div>
                        Error en la conexión, intenta mas tarde
                    </div>
            }
        </div>
    )
}

export default Gallery


//productos.length > 0 &&