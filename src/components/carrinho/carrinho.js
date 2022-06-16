import React, { Component } from 'react'
import { CarrinhoContainer, Product, ProductList } from './style.js'

export class Carrinho extends Component {
  state = {
    carrinho: [
      {
        id: "1",
        name: "blusa1",
        valor: 300
      },
      {
        id: "2",
        name: "blusa2",
        valor: 300
      },
      {
        id: "3",
        name: "blusa3",
        valor: 300
      },
      {
        id: "4",
        name: "blusa4",
        valor: 300
      }
    ]
  };

  removerProduto = (id) => {
    const { carrinho } = this.state

    const novaListaDeProdutos = carrinho.filter((produto, index) => {
      if (produto.id === id) {
        carrinho.splice(index, 1)
      } 

      return produto
    })

    console.log(novaListaDeProdutos)

    this.setState({
      carrinho: novaListaDeProdutos
    })
  }
  render() {

    return (
      <CarrinhoContainer>
        <h2>Carrinho</h2>
        <ProductList>
          {
            this.state.carrinho.map((produto) => {
              return <Product key={produto.id}>
                <h4>{produto.name}</h4>
                <p>{produto.valor}</p>
                <button onClick={() => this.removerProduto(produto.id)}>remover do carrinho</button>
              </Product>
            })
          }
        </ProductList>
      </CarrinhoContainer>
    )
  }
}

export default Carrinho;