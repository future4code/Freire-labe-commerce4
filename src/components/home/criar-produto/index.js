import React from 'react';
import './index.css';
import { ProdutoContainer } from './style';

// criar produtos individuais personalizado (imagem,nome,preço) e tem um botão adicionar ao carrinho

class Produto extends React.Component {

  adicionarProdutoAoCarrinho = () => {
    this.props.produtoSelecionado(this.props.id);
  }

  render() {
    console.log("open", this.props.open)
    return (
        <ProdutoContainer open={this.props.open} id={this.props.id}>
            <div className='contene-produtos-espostos'>
              <div className='contene-produtos'>
                <img src={this.props.imagem} alt={this.props.nome}></img>
                <div className='contene-descricao-produto'>
                  <p>{this.props.nome} </p>
                  <b>R${this.props.value}</b>
                  <button className='adicionar-carrinho'  onClick={this.adicionarProdutoAoCarrinho} ><p className='letra-carrinho'>Adicionar ao carrinho</p></button>
                </div>
              </div>
            </div>
        </ProdutoContainer>
    )
}
}

export default Produto; 