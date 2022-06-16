import React from 'react';
import './App.css'
import Produtos from './components/produtos/index';
import Filtro from './components/filtro/filtro';
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: 25% 50% 25%;
`

class App extends React.Component {
  render() {
    return (
      <Container>
        <Filtro/>
        <Produtos/>
      </Container>
    );
  }
}

export default App;
