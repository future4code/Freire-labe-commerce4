import React, {Component} from 'react';

// components
import Carrinho from './components/carrinho'
import Produtos from './components/produtos/index';
import Filtro from './components/filtro/filtro';
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
`

// styles
import './App.css'
import { MainContainer } from './global-style'
import { CartProduct } from './components/carrinho/styles';

// icons
import { TrashIcon } from './assets/icons/icons';


class App extends Component {
  state = {
    cart: [
      {
        id: '1',
        quantity: 1,
        name: "Blusa",
        value: 300
      },
      {
        id: '2',
        quantity: 1,
        name: "calça",
        value: 300
      },
      {
        id: '3',
        quantity: 1,
        name: "tenis",
        value: 344.50
      }
    ]
  }

  removeProduct = (id) => {
    const { cart } = this.state

    const newCart = cart.filter((product) => {
      return product.id !== id
    })

    this.setState({
      cart: newCart
    })
  }

  getTotalValue = () => {
    const { cart } = this.state
    let totalValue = 0

    cart.map((product) => {
      return totalValue = totalValue + (product.value * product.quantity)
    })

    return totalValue.toFixed(2).replace(".", ",")
  }

  renderCartList = () => {
    const { cart } = this.state;

    const newCartList = cart.map(({ id, name, value, quantity }) => {

      return <CartProduct key={id} >
        <span>{quantity}x</span>
        <h4>{name}</h4>
        <span>R$ {value.toFixed(2).replace(".", ",")}</span>
        <button onClick={() => this.removeProduct(id)}><TrashIcon /></button>
      </CartProduct>
    })

    return newCartList;
  }
  render() {
    return (
      <Container>
        <Filtro/>
        <Produtos/>
        <Carrinho cart={this.renderCartList()} totalValue={this.getTotalValue()}/>
      </Container>
    );
  }
}

export default App;
