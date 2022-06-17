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
                            <li><a href="#">nome 1</a></li>
                            <li><a href="#">nome 2</a></li>
                            <li><a href="#">nome 3</a></li>
                        </ul>
                    </nav>
                    <a className='cta' href='#'><button className='header-button' >nome 4</button></a>
                </header>
            </body>
        </div>
    )
}
}

export default Header;