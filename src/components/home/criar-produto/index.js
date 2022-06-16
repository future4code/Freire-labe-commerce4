import React from 'react';
import './index.css';

// criar produtos individuais personalizado (imagem,nome,preço) e tem um botão adicionar ao carrinho

class Produto extends React.Component {
  render() {
    return (
        <div className="produto">
            <div className='contene-produtos-espostos'>
              <div className='contene-produtos'>
                <img src={this.props.imagem}></img>
                <div className='contene-descricao-produto'>
                  <p>{this.props.nome} </p>
                  <b>R${this.props.valor}</b>
                  <button className='adicionar-carrinho'><p className='letra-carrinho'>Adicionar ao carrinho</p></button>
                </div>
              </div>
            </div>
        </div>
    )
}
}

export default Produto; 