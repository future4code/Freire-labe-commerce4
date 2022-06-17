import React, { Component } from 'react'
import { InstagramIcon, WhatsappIcon } from '../../assets/icons/icons';
import "./style.css"

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
                        <li><a href=''>Nós fazemos camisetas engraçadas e de outro mundo, afinal a vida já está cheia de coisas sérias e chatas,sua camiseta não precisa ser assim também! Nós, da space.Geek, surgimo em 2019, graças a nossa paixão pelo mundo geek e pela peça mais versátil do nosso guarda-roupa: a camiseta.Cuidado é a palavra chave durante todo  o processo, desde a criação de estampas a produção das camisetas, estamparia e embalagem, o pensamento é um só: aagradar nossos clientes. Estamos sempre em processo de evolução e melhorias, por isso nossos canais de comunicação estão sempre abertos para receber feedbacks. Email: falacomigo@space.Geek.com.br Telefone(whatsapp) : (21) 96666-5555</a></li>
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