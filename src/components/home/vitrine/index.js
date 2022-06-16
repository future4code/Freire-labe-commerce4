import React from 'react';
import './index.css';
import Produto from '../criar-produto/index';

// Aqui é onde os produtos são criados e expostos a venda

class VitrineProdutos extends React.Component {

    enviarProdutoSelecionado = (id) => {
        this.props.enviarProdutoSelecionado(id);
    }

    render() {
        return(
            <div className="vitrine">
                {this.props.produtos.map((produto) => {
                    return (
                        <Produto
                            id={produto.id}
                            key={produto.id}
                            imagem={produto.imagem}
                            nome={produto.nome}
                            value={produto.value}
                            produtoSelecionado={this.enviarProdutoSelecionado}
                        />
                    )
                })}
            </div>
        )
    }
}
  
export default VitrineProdutos;