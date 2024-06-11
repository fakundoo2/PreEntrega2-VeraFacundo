import './menu.css'

import CartWidget from '../cartwidget/cartwidget'
import {Link} from 'react-router-dom'

const Menu = () => {
    return(
        <header>
            
            <Link to={'./'}>
                <h1>Buhonero3D</h1>
            </Link>
        
            <nav>
                <ul>
                    <Link to={'/category/resina'}>
                        <li>Resina</li>
                    </Link>
                    
                    <Link to={'/category/plastico'}>
                        <li>Plastico</li>
                    </Link>                   
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}

export default Menu