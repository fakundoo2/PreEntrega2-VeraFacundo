import './menu.css'

import CartWidget from '../cartwidget/cartwidget'

const Menu = () => {
    return(
        <header>
            <h1>Buhonero3D</h1>

            <nav>
                <ul>
                    <li><a href="">inicio</a></li>
                    <li><a href="">productos</a></li>                   
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}

export default Menu