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
                  <p>R${this.props.valor}</p>
                  <button className="adicionar-carinho">Adicionar ao carrinho</button>
                </div>
              </div>
            </div>
        </div>
    )
}
}

export default Produto;