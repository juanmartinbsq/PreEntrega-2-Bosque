import './navbar.css'

const NavBar = () => {
    return (
        <div className='navbar navbar-expand-lg'>
            <a className='navbar-brand' href='#'>Dunk Nation</a>
            <nav className='navbar justify-content-end'>
                <div className=''>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Home</a></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Jersey</a></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Buzos</a></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Shorts</a></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Contacto</a></li>
                    </ul>
                </div>

            </nav>
        </div>

    )
}

export default NavBar;