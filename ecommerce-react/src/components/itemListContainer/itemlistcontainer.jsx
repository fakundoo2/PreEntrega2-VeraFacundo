import { useParams } from "react-router-dom";
import CardProductos from "../cardproductos/cardproductos";
import { useState, useEffect } from "react"

const ItemListContainer = () => {
  const [product, setProducts ] = useState([]);
  const [pla, setPla] = useState(true);
   

  const MiPromesa = new Promise ((res, rej) => {
    const infoProductos = [
      {
          id: 1,
          categoria: 'resina',
          img : "../imagenes/eevee.jpeg",
          nombre: "Eevee",
          tamaño: 8,
          precio: 8000
      },
      {
          id: 2,
          img : "img2",
          categoria: 'plastico',
          nombre: "Mate Harry Potter",
          tamaño: 10,
          precio: 8000
      },
      {
          id: 3,
          img : "img3",
          categoria: 'resina',
          nombre: "Flareon",
          tamaño: 10,
          precio: 8000
      },
      {
          id: 4,
          categoria: 'plastico',
          img : "img3",
          nombre: "Juego Tetris",
          tamaño: 10,
          precio: 8000
      },
      {
          id: 5,
          categoria: 'resina',
          img : "img3",
          nombre: "Espeon",
          tamaño: 10,
          precio: 8000
      },
      {
          id: 6,
          categoria: 'plastico',
          img : "img3",
          nombre: "Deckbox Pokemon",
          tamaño: 10,
          precio: 8000
      },

  ]
  setTimeout(() => {
   pla ? res(infoProductos) : res('no hay productos') 
  }, 200);

  }) 

  const {idCategory} = useParams()

  useEffect (() => {
    MiPromesa
        .then(res => setProducts(res))
        .catch(e => console.error(e))

  }, [])

  return (
    <> 
      <div className="container"> 
        {product?.map((pr)=> <CardProductos key={pr.id} prinfo={pr} /> )}
      </div>
      
      
    </>
  )
}

export default ItemListContainer