
import React, { Component } from 'react';
import Carrinho from './components/carrinho'
import './App.css'
import VitrineProdutos from './components/home/vitrine/index';
import Header from './components/header';
import Filtro from './components/filtro/filtro';
import { CartProduct } from './components/carrinho/styles';
import { TrashIcon } from './assets/icons/icons';
import {MainContainer} from './global-style';
import Footer from './components/footer';

class App extends Component {
  state = {
    filtros: {
      valorMinimo: "",
      valorMaximo: 1000,
      buscaNome: ""
    },
    produtos: [
      {
        id: Math.random(),
        imagem: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f42125dd-d1a1-4cf0-a6fb-e1b3a52ffe08/Screen20Shot202022-06-1720at2014.16.50.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180503Z&X-Amz-Expires=86400&X-Amz-Signature=917c06dd9e441a4253197a6fa7ab40e06933a69b87453dfc6277b377acaec813&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.16.50.JPG.jpg%22&x-id=GetObject",
        nome: 'Produto Bota',
        value: 200
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69419e56-4065-46f7-8e89-7d5112a72732/Screen_Shot_2022-06-17_at_14.26.45.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180415Z&X-Amz-Expires=86400&X-Amz-Signature=48af8ba6cd3d8c842708879da8e06501679ffaf234918ef711ef9bef156b96ce&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%2520Shot%25202022-06-17%2520at%252014.26.45.JPG.jpg%22&x-id=GetObject',
        nome: 'Produto Luva',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/031a2132-d118-458a-add2-6ed6c10bafb4/Screen20Shot202022-06-1720at2014.18.17.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180608Z&X-Amz-Expires=86400&X-Amz-Signature=026ca44543b80640065ab2403151e6c57a9f36fa49a63babd881dff038a5eedb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.18.17.JPG.jpg%22&x-id=GetObject',
        nome: 'Produto Calça',
        value: 150
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f39117df-374c-4151-8386-75839ae92ac7/Screen20Shot202022-06-1720at2014.18.27.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180704Z&X-Amz-Expires=86400&X-Amz-Signature=ade883cd3ecef177fa1cf62bcf3fc5d92321725d36a78d40f8df7ac36d22d67d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.18.27.JPG.jpg%22&x-id=GetObject',
        nome: 'Produto Meia',
        value: 25
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69419e56-4065-46f7-8e89-7d5112a72732/Screen_Shot_2022-06-17_at_14.26.45.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180415Z&X-Amz-Expires=86400&X-Amz-Signature=48af8ba6cd3d8c842708879da8e06501679ffaf234918ef711ef9bef156b96ce&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%2520Shot%25202022-06-17%2520at%252014.26.45.JPG.jpg%22&x-id=GetObject',
        nome: 'Produto Luva',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69419e56-4065-46f7-8e89-7d5112a72732/Screen_Shot_2022-06-17_at_14.26.45.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180415Z&X-Amz-Expires=86400&X-Amz-Signature=48af8ba6cd3d8c842708879da8e06501679ffaf234918ef711ef9bef156b96ce&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%2520Shot%25202022-06-17%2520at%252014.26.45.JPG.jpg%22&x-id=GetObject',
        nome: 'Produto Luva',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69419e56-4065-46f7-8e89-7d5112a72732/Screen_Shot_2022-06-17_at_14.26.45.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180415Z&X-Amz-Expires=86400&X-Amz-Signature=48af8ba6cd3d8c842708879da8e06501679ffaf234918ef711ef9bef156b96ce&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%2520Shot%25202022-06-17%2520at%252014.26.45.JPG.jpg%22&x-id=GetObject',
        nome: 'Produto Luva',
        value: 100
      }
    ],
    cart: []
  }

  // Lógicas para Filtrar Produtos

  produtosFiltrados = () => {
    const filtros = this.state.filtros;

    const produtosFiltrados = this.state.produtos.filter((produto) => {
      if (produto.value >= filtros.valorMinimo && produto.value <= filtros.valorMaximo && produto.nome.includes(filtros.buscaNome)) {
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
      if (produto.id === id) {
        return produto
      }
    });

    const [novoProdutoCarrinho] = produtoFiltradoParaAdicionarAoCarrinho

    const jaExisteProdutoNoCarrinho = this.state.cart.find((produto) => {
      return produto.id === novoProdutoCarrinho.id
    });

    if (jaExisteProdutoNoCarrinho) {
      const novoCarrinhoComQuantidadeAtualizada = this.state.cart.map((produto) => {
        if (jaExisteProdutoNoCarrinho.id === produto.id) {
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
          { ...novoProdutoCarrinho, quantity: 1 }
        ]
      })
    }
  }

  removeProduct = (id) => {
    const { cart } = this.state

    const itemToRemove = cart.find((product) => product.id === id);

    let newCart = [];

    if (itemToRemove.quantity > 1) {
      newCart = cart.map((produto) => {
        if (produto.quantity > 1) {
          return { ...produto, quantity: produto.quantity - 1 }
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
      <div className='container-principal'>
        <Header />
        <MainContainer>

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
        </MainContainer>
        <Footer/>
      </div>
    );
  }
}

export default App;
