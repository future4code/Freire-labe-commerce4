import React from "react"
import styled from "styled-components"

const Divforms = styled.div`
display: flex;
flex-direction: column;
margin-left: 30px;
margin-top: 30px;
border: solid 1px;
width: 300px;
height: 100vh;
`
const Filtros = styled.div`
margin-left: 20px;
margin-top: 20px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 150px;
`

const Input = styled.input`
margin-bottom: 10px;
`

class Filtro extends React.Component {
    state = {
        valorMinimo: 100,
        valorMaximo: 1000,
        buscaNome: 'Produto'
    }

    onChangeValorMinimo = (event) => {
        this.setState({
          valorMinimo: event.target.value
        })
    }
    
    onChangeValorMaximo = (event) => {
        this.setState({
          valorMaximo: event.target.value
        })
    }
    
    onChangeBuscaNome = (event) => {
        this.setState({
          buscaNome: event.target.value
        })
    }

    render() {
        return(
            <Divforms>
            <Filtros>
              <h2>Filtros</h2>
              <Form>
                  <label htmlFor="valormin">Valor mínimo:</label>
                  <Input 
                      type="number" 
                      id="valormin" 
                      name="valormin"
                      value={this.state.valorMinimo}
                      onChange={this.onChangeValorMinimo}
                  />
                  <label htmlFor="valormax">Valor máximo:</label>
                  <Input 
                      type="number" 
                      id="valormax" 
                      name="valormax"
                      value={this.state.valorMaximo}
                      onChange={this.onChangeValorMaximo}
                  />
                  <label htmlFor="nome">Busca por nome:</label>
                  <Input 
                      type="text" 
                      id="nome" 
                      name="nome"
                      value={this.state.buscaNome}
                      onChange={this.onChangeBuscaNome}
                  />
              </Form>
            </Filtros>
          </Divforms>
        )
    }
}

export default Filtro;