import React from "react"
import styled from "styled-components"

const Divforms = styled.div`
display: flex;
flex-direction: column;
border: solid 1px;
width: 20%;
height: 70%;
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
border-radius: 10px;
height: 30px;
text-align: center;
margin-top: 10px;
`

class Filtro extends React.Component {

    onChangeValorMinimo = (event) => {
        this.props.enviarNovoValorMinimo(event.target.value);
    }

    onChangeValorMaximo = (event) => {
        this.props.enviarNovoValorMaximo(event.target.value);
    }

    onChangeBuscaNome = (event) => {
        this.props.enviarNovoBuscaNome(event.target.value);
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
                      value={this.props.filtros.valorMinimo}
                      onChange={this.onChangeValorMinimo}
                      placeholder="mínimo" 
                  />
                  <label htmlFor="valormax">Valor máximo:</label>
                  <Input 
                      type="number" 
                      id="valormax" 
                      name="valormax"
                      value={this.props.filtros.valorMaximo}
                      onChange={this.onChangeValorMaximo}
                      placeholder="máximo" 
                  />
                  <label htmlFor="nome">Busca por nome:</label>
                  <Input 
                      type="text" 
                      id="nome" 
                      name="nome"
                      value={this.props.filtros.buscaNome}
                      onChange={this.onChangeBuscaNome}
                      placeholder="nome" 
                  />
              </Form>
            </Filtros>
          </Divforms>
        )
    }
}

export default Filtro;