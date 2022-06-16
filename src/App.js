import React from 'react';
import './App.css'
import VitrineProdutos from './components/home/vitrine/index';
import Filtro from './components/filtro/filtro';


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
