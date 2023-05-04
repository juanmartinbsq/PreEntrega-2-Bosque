import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h2 className='logo' href="#">Dunk Nation</h2>
            <div>
                <ul className='d-flex p-2'>
                    <li>
                        <a className='list' href="#">Home</a>
                    </li>
                    <li>
                        <a className='list' href="#">Jersey</a>
                    </li>
                    <li>
                        <a className='list' href="#">Buzos</a>
                    </li>
                    <li>
                        <a className='list' href="#">Shorts</a>
                    </li>
                    <li>
                        <a className='list' href="#">Contacto</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar;