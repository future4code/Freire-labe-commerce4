import React from 'react';
import './App.css'
import Produtos from './components/produtos/index';
import Filtro from './components/filtro/filtro'
import Carrinho from './components/carrinho/carrinho';
import styled from "styled-components"

class App extends React.Component {
  render() {
    return (
      <div>
        <Filtro/>
        <Produtos/>
        <Carrinho/>
      </div>
    );
  }
}

export default App;
