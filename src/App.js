
import React, {Component} from 'react';
import Carrinho from './components/carrinho'
import './App.css'
import VitrineProdutos from './components/home/vitrine/index';
import Herder from './components/header';
import Filtro from './components/filtro/filtro';
import { CartProduct } from './components/carrinho/styles';
import { TrashIcon } from './assets/icons/icons';

class App extends Component {
  state = {
    filtros : {
      valorMinimo: 25,
      valorMaximo: 1000,
      buscaNome: 'Produto'
    },
    produtos: [
      {
        id: Math.random(),
        imagem: 'https://static.zattini.com.br/produtos/bota-coturno-feminina-vicerinne-tratorada-salto-alto/06/GYK-0049-006/GYK-0049-006_zoom1.jpg?ts=1632126026',
        nome: 'Produto Bota',
        value: 200
      },
      {
        id: Math.random(),
        imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3mvNErXhxOBT_t_MH_7Sai7MlzK2qVJ5erUeoe6f_wBHJ06XTSk__mtpwHH3IKc3fAtZUGwnqvAmz&usqp=CAc',
        nome: 'Produto Luva',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3mvNErXhxOBT_t_MH_7Sai7MlzK2qVJ5erUeoe6f_wBHJ06XTSk__mtpwHH3IKc3fAtZUGwnqvAmz&usqp=CAc',
        nome: 'Produto Calça',
        value: 150
      },
      {
        id: Math.random(),
        imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3mvNErXhxOBT_t_MH_7Sai7MlzK2qVJ5erUeoe6f_wBHJ06XTSk__mtpwHH3IKc3fAtZUGwnqvAmz&usqp=CAc',
        nome: 'Produto Meia',
        value: 25
      }
    ],
    cart: []
  }

  // Lógicas para Filtrar Produtos

  produtosFiltrados = () => {
    const filtros = this.state.filtros;

    const produtosFiltrados = this.state.produtos.filter((produto) => {
      if(produto.value >= filtros.valorMinimo && produto.value <= filtros.valorMaximo && produto.nome.includes(filtros.buscaNome)) {
        return produto;
      }
    })

    return produtosFiltrados;
  }

  // Lógicas para Atualizar Filtros

  onChangeValorMinimo = (novoValorMinimo) => {
    this.setState({
      filtros: {
        ...this.state.filtros,
        valorMinimo: novoValorMinimo
      }
    })
  }

  onChangeValorMaximo = (novoValorMaximo) => {
    this.setState({
      filtros: {
        ...this.state.filtros,
        valorMaximo: novoValorMaximo
      }
    })
  }

  onChangeBuscaNome = (novoBuscaNome) => {
    this.setState({
      filtros: {
        ...this.state.filtros,
        buscaNome: novoBuscaNome
      }
    })
  }

  // Logicas para Carrinho de Compras

  addProdutToCart = (id) => {
    const produtos = this.state.produtos;

    const produtoFiltradoParaAdicionarAoCarrinho = produtos.filter((produto) => {
      if(produto.id === id) {
        return produto
      }
    });

    const [ novoProdutoCarrinho ] = produtoFiltradoParaAdicionarAoCarrinho

    const jaExisteProdutoNoCarrinho = this.state.cart.find((produto) => {
      return produto.id === novoProdutoCarrinho.id
    });

    if(jaExisteProdutoNoCarrinho) {
      const novoCarrinhoComQuantidadeAtualizada = this.state.cart.map((produto) => {
        if(jaExisteProdutoNoCarrinho.id === produto.id) {
          return {
            ...produto,
            quantity: produto.quantity + 1
          }
        } else {
          return produto
        }
      })

      this.setState({
        cart: [
          ...novoCarrinhoComQuantidadeAtualizada
        ]
      })
    } else {
      this.setState({
        cart: [
          ...this.state.cart,
          {...novoProdutoCarrinho, quantity: 1}
        ]
      })
    }
  }

  removeProduct = (id) => {
    const { cart } = this.state

    const itemToRemove = cart.find((product) => product.id === id);

    let newCart = [];

    if(itemToRemove.quantity > 1) {
      newCart = cart.map((produto) => {
        if(produto.quantity > 1) {
          return {...produto, quantity: produto.quantity - 1}
        } else {
          return produto
        }
      })
    } else {
      newCart = cart.filter((product) => {
        return product.id !== id
      })
    }

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

    const newCartList = cart.map(({ id, nome, value, quantity }) => {

      return <CartProduct key={id} >
        <span>{quantity}x</span>
        <h4>{nome}</h4>
        <span>R$ {value.toFixed(2).replace(".", ",")}</span>
        <button onClick={() => this.removeProduct(id)}><TrashIcon /></button>
      </CartProduct>
    })

    return newCartList;
  }

  // Renderização do Template Principal

  render() {
    return (
      <div>
       <Herder></Herder>
       <div className="container">

        <Filtro
          filtros={this.state.filtros}
          enviarNovoValorMinimo={this.onChangeValorMinimo}
          enviarNovoValorMaximo={this.onChangeValorMaximo}
          enviarNovoBuscaNome={this.onChangeBuscaNome}
        />
        <VitrineProdutos
          produtos={this.produtosFiltrados()}
          enviarProdutoSelecionado={this.addProdutToCart}
        />
        <Carrinho
          cart={this.renderCartList()}
          totalValue={this.getTotalValue()}
        />
      </div>
    </div>
    );
  }
}

export default App;
