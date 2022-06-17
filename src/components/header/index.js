import React from 'react';
import './index.css';
import logo from '../../assets/icons/spacegeeklogo.jpg'


class Header extends React.Component {
  render() {
    return (
        <div className="contene">
            <body>
                <header class="header">
                    <img className='logo' src={logo} alt="logo"></img>
                    <nav>
                        <ul className='nav-links'>
                            <li><a href="#"> Home </a></li>
                            <li><a href="#"> Ofertas </a></li>
                            <li><a href="#"> Formas de Pagamento</a></li>
                        </ul>
                    </nav>
                </header>
            </body>
        </div>
    )
}
}

export default Header;