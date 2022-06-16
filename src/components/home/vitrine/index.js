import React from 'react';
import './index.css';
import Produto from '../criar-produto/index';

// Aqui é onde os produtos são criados e expostos a venda

function VitrineProdutos() {

    return (
        <div>
        <div className="vitrine">
            <Produto
                imagem = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTR5MTV40RxkI4j2eL-450Q_VeMx3rejqr9s_td0_6aGudDZrwjlUG0bG044r8zu_hetn-up5QZg5ftoQIVjMYKE9pLHvub9Q&usqp=CAE"
                nome="Camiseta Astronauta Navegando na galaxia"
                valor="84,90"
            ></Produto>
            <Produto
                imagem = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYPDFUXHe6clsi7R5GCGV-AVQKSnAQo_HwQJJvgNgbFAC_d7W_Mskxg14vffuXiv3RIj9C6YtxvvmksM8hOQrAs7Q5DGAuQAQbZBHMw-JW-QGwI54jAL6CKQ&usqp=CAE"
                nome="Camiseta Selfie no espaço Astronauta"
                valor="84,90"
            ></Produto>
            <Produto
                imagem = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzMRuy3AjEdIV3MYmpVRFwbY3PeY01UJz8sSc2GKvXjL5nwN5nA6rsfrc5D0HGjWdFn4eWVkNdLcPjRhm7yiS4yjVfxV8KRq46cEBcZDL0AmWgSm45wkg0&usqp=CAE"
                nome="Vestido Infantil Menina Criança Foguete Astronauta Espaço Elev"
                valor="48,00"
            ></Produto>
            <Produto
                imagem = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnFj9OdiHI7Hxm77Ol6hrtaqB-3peVLMb52UjGJ3edycvJ2cM9V6mH3m0qrL6eFPyrhBVREjYltuo0hM1LFy4d3JIY1RppxPu0-7oIxyIp&usqp=CAE"
                nome="Vestido Astronauta Balloon"
                valor="124,90"
            ></Produto>
        </div>
        </div>
    )
}
  
export default VitrineProdutos;