import React, { Component } from 'react'
import { InstagramIcon, WhatsappIcon } from '../../assets/icons/icons';
import "./style.css"

const logo = "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2014%2F02%2F17%2F02%2FWDL-Logo-37189_72584_060705192_418442636.jpg"

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='boxs'>
                    <h2>Início</h2>
                    <ul>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Produtos</a></li>
                        <li><a href=''>Download</a></li>
                    </ul>
                </div>
                <div className='boxs'>
                    <h2>Informações</h2>
                    <ul>
                        <li><a href=''>Contato</a></li>
                        <li><a href=''>Email</a></li>
                        <li><a href=''></a></li>
                    </ul>
                </div>
                <div className='boxs'>
                    <h2>Suporte</h2>
                    <ul>
                        <li><a href=''>FAQ</a></li>
                        <li><a href=''>Telefone</a></li>
                        <li><a href=''>Chat</a></li>
                    </ul>
                </div>
                <div className='boxs'>
                    <h2>Sobre nós</h2>
                    <ul>
                        <li><a href=''>FAQ</a></li>
                    </ul>
                </div>
                <div className='footer'>
                    <h2>Fale conosco</h2>
                    <div className="sociais">
                        <div className='social'>
                            <a href='#'><i className='fa fa-instagram' aria-hidden="true"><InstagramIcon/></i></a>
                        </div>
                        <div className='social'>
                            <a href='#'><i className='fa fa-whatsapp' aria-hidden="true"></i><WhatsappIcon/></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;