import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filtro from './componentes/filtro/filtro'
import styled from "styled-components"

class App extends React.Component {
  render() {
    return (
      <div>
        <Filtro/>
      </div>
    );
  }
}

export default App;
