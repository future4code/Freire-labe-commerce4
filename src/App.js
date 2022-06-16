import React from 'react';
import './App.css'
import VitrineProdutos from './components/home/vitrine/index';
import Herder from './components/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Herder></Herder>
        <VitrineProdutos></VitrineProdutos>
      </div>
    );
  }
}

export default App;
