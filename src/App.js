
import React, { Component } from 'react';
import Carrinho from './components/carrinho'
import './App.css'
import VitrineProdutos from './components/home/vitrine/index';
import Header from './components/header';
import Filtro from './components/filtro/filtro';
import { CartProduct } from './components/carrinho/styles';
import { TrashIcon } from './assets/icons/icons';
import { MainContainer } from './global-style';
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
        nome: 'Contato 3 Grau',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f39117df-374c-4151-8386-75839ae92ac7/Screen20Shot202022-06-1720at2014.18.27.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180704Z&X-Amz-Expires=86400&X-Amz-Signature=ade883cd3ecef177fa1cf62bcf3fc5d92321725d36a78d40f8df7ac36d22d67d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.18.27.JPG.jpg%22&x-id=GetObject',
        nome: 'ET 3D',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/031a2132-d118-458a-add2-6ed6c10bafb4/Screen20Shot202022-06-1720at2014.18.17.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180608Z&X-Amz-Expires=86400&X-Amz-Signature=026ca44543b80640065ab2403151e6c57a9f36fa49a63babd881dff038a5eedb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.18.17.JPG.jpg%22&x-id=GetObject',
        nome: 'Halloween',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69419e56-4065-46f7-8e89-7d5112a72732/Screen_Shot_2022-06-17_at_14.26.45.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T180415Z&X-Amz-Expires=86400&X-Amz-Signature=48af8ba6cd3d8c842708879da8e06501679ffaf234918ef711ef9bef156b96ce&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%2520Shot%25202022-06-17%2520at%252014.26.45.JPG.jpg%22&x-id=GetObject',
        nome: 'FIT ASTRO',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f4e0661-c13b-4c80-8f03-decb45713ecd/Screen20Shot202022-06-1720at2014.19.55.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T195252Z&X-Amz-Expires=86400&X-Amz-Signature=0bf6f4a1821909456b531a3eb7b2ae46da3c2cbefab3d8cd2de2b9c5c247b815&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.19.55.JPG.jpg%22&x-id=GetObject',
        nome: 'Space Café',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/accb02e6-2570-4883-a90e-7714dcbebda7/Screen20Shot202022-06-1720at2014.28.18.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T195510Z&X-Amz-Expires=86400&X-Amz-Signature=54af1d73dea8bfed055c4f9bd42e98666e130180de79e519c21d07e934a51189&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.28.18.JPG.jpg%22&x-id=GetObject',
        nome: 'NASA',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c0bf587d-f58c-4684-8ddf-9e0393156278/Screen20Shot202022-06-1720at2014.29.59.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T195542Z&X-Amz-Expires=86400&X-Amz-Signature=19d45f5d5d14eff40fc39bea6897870099d333bd2afbe587394c6f35e655f3f0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.29.59.JPG.jpg%22&x-id=GetObject',
        nome: 'Abdução',
        value: 100
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/14e37881-ac9c-4128-86ce-22ea6100745d/Screen20Shot202022-06-1720at2014.33.41.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T195638Z&X-Amz-Expires=86400&X-Amz-Signature=153498a205305647625ba6647c9fd322112b2ac801598c749e25cf833a50e218&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.33.41.JPG.jpg%22&x-id=GetObject',
        nome: 'Astro Socks',
        value: 25
      },
      {
        id: Math.random(),
        imagem: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9a4d6c45-83b5-49e3-871c-22b971591290/Screen20Shot202022-06-1720at2014.33.59.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220617T195702Z&X-Amz-Expires=86400&X-Amz-Signature=546d2855bb42a5b92376872dfbf4ed8e60d93a290deba3ffadc460a5742460cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%252520Shot%2525202022-06-17%252520at%25252014.33.59.JPG.jpg%22&x-id=GetObject',
        nome: 'Astro PJ',
        value: 200
      }
    ],
    cart: [],
    open: false
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
          ...novoCarrinhoComQuantidadeAtualizada,
        ],
        open: true
      })
    } else {
      this.setState({
        cart: [
          ...this.state.cart,
          { ...novoProdutoCarrinho, quantity: 1 }
        ],
        open: true
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

  openCart = () => {
    const { open } = this.state

    this.setState({ open: !open })
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
            open={this.state.open}
            produtos={this.produtosFiltrados()}
            enviarProdutoSelecionado={this.addProdutToCart}
          />
          <Carrinho
            open={this.state.open}
            openCart={() => this.openCart()}
            cart={this.renderCartList()}
            totalValue={this.getTotalValue()}
          />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
