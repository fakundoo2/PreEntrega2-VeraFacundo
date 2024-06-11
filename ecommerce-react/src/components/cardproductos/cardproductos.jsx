import './cardproductos.css'
import {Link} from 'react-router-dom'

const CardProductos = ({prinfo}) => {

    return (
        <div className="card col-3 ">
            <img src={prinfo.img} alt="" />
            <h2 className="cardTitle">{prinfo.nombre}</h2>
            <p className="cardPrice">Precio: ${prinfo.precio}</p>
            <Link>
                <button className="buttonDetail">Detalles</button>
            </Link>
            
        </div>
    )
    
}

export default CardProductos