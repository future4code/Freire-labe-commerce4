import React from 'react';
import './App.css'
import Produtos from './components/produtos/index';
import Filtro from './componentes/filtro/filtro'
import styled from "styled-components"

class App extends React.Component {
  render() {
    return (
      <div>
        <Filtro/>
        <Produtos/>
      </div>
    );
  }
}

export default App;
