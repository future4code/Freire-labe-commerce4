import React from 'react';
import './index.css';
import Produto from '../criar-produto/index';

// Aqui é onde os produtos são criados e expostos a venda

function VitrineProdutos() {

    return (
        <div>
        <div className="vitrine">
            <Produto
                imagem = "https://static.zattini.com.br/produtos/bota-coturno-feminina-vicerinne-tratorada-salto-alto/06/GYK-0049-006/GYK-0049-006_zoom1.jpg?ts=1632126026"
                nome="bota"
                valor="200,00"
            ></Produto>
            <Produto
                imagem = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3mvNErXhxOBT_t_MH_7Sai7MlzK2qVJ5erUeoe6f_wBHJ06XTSk__mtpwHH3IKc3fAtZUGwnqvAmz&usqp=CAc"
                nome="luva"
                valor="100,00"
            ></Produto>
            <Produto
                imagem = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3mvNErXhxOBT_t_MH_7Sai7MlzK2qVJ5erUeoe6f_wBHJ06XTSk__mtpwHH3IKc3fAtZUGwnqvAmz&usqp=CAc"
                nome="eqweqw"
                valor="130,00"
            ></Produto>
            <Produto
                imagem = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3mvNErXhxOBT_t_MH_7Sai7MlzK2qVJ5erUeoe6f_wBHJ06XTSk__mtpwHH3IKc3fAtZUGwnqvAmz&usqp=CAc"
                nome="luvwqeqwea"
                valor="160,00"
            ></Produto>
        </div>
        </div>
    )
}
  
export default VitrineProdutos;