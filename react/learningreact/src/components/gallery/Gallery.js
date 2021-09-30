import React, { useState, useEffect } from 'react'
import './gallery.css'
import { products } from '../../data/products'

const Gallery = ({ keyword }) => {
    const [productos, setProductos] = useState(products)

    useEffect(() => {
        if (keyword !== "") {
            let producto = products.find(product => product.nombre === keyword);
            if (producto !== undefined) {
                setProductos([producto]);
            } else {
                setProductos([]);
            }
        }else{
            setProductos(products);
        }
    }, [keyword])

    return (
        <div className="galleryComponent">
            {productos.length > 0 &&
                productos.map(item => {
                    return (<div className="itemProduct">
                        <div><strong>Nombre:</strong> {item.nombre}</div>
                        <div><strong>Precio:</strong> {item.precio}</div>
                        <div><strong>Calificación:</strong> {item.calificacion}</div>
                    </div>);
                })
            }
        </div>
    )
}

export default Gallery
