import React from 'react';
import './index.css';

// criar produtos individuais personalizado (imagem,nome,preço) e tem um botão adicionar ao carrinho

class Produto extends React.Component {

  adicionarProdutoAoCarrinho = () => {
    this.props.produtoSelecionado(this.props.id);
  }

  render() {
    return (
        <div id={this.props.id} className="produto">
            <div className='contene-produtos-espostos'>
              <div className='contene-produtos'>
                <img src={this.props.imagem} alt={this.props.nome}></img>
                <div className='contene-descricao-produto'>
                  <p>{this.props.nome} </p>
                  <p>R${this.props.value}</p>
                  <button className="adicionar-carinho" onClick={this.adicionarProdutoAoCarrinho}>Adicionar ao carrinho</button>
                </div>
              </div>
            </div>
        </div>
    )
}
}

export default Produto;