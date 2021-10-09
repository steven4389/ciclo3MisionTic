import React, { useState, useEffect } from 'react'
import './gallery.css'
import { products } from '../../data/products'

const Gallery = ({ keyword }) => {
    const [productos, setProductos] = useState([])

    /*este Hook esta pendiente de 
    cuando cambie el state keyword*/
    useEffect(() => {
        if (keyword !== "") {
            console.log('keyword', keyword);

            fetch(`http://localhost:5000/api/getByName/${keyword}`)
            .then(response => response.json())
            .then(data => {
                console.log('response', data)
                setProductos(data);
            }
            ).catch((error) => {
                console.log(error);
            });

        } else {

            fetch('http://localhost:5000/api/')
                .then(response => response.json())
                .then(data => {
                    console.log('response', data)
                    setProductos(data);
                }
                ).catch((error) => {
                    console.log(error);
                });

        }
    }, [keyword])



    return (
        <div className="galleryComponent">
            {(productos !== undefined && productos.length > 0) ?
                productos.map(item => {
                    return (<div className="itemProduct">
                        <div><strong>Nombre:</strong> {item.name}</div>
                        <div><strong>Precio:</strong> {item.valor}</div>
                        <div><strong>categoria:</strong> {item.category}</div>
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