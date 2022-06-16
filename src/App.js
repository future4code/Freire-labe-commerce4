import React from 'react';
import './App.css'
import VitrineProdutos from './components/home/vitrine/index';
// import Filtro from './componentes/filtro/filtro'
// import styled from "styled-components"

class App extends React.Component {
  render() {
    return (
      <div>
        <VitrineProdutos></VitrineProdutos>
      </div>
    );
  }
}

export default App;
