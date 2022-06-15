import React from "react";
import styled from "styled-components"

const Divforms = styled.div`
display: flex;
flex-direction: column;
margin-left: 30px;
margin-top: 30px;
border: solid 1px;
width: 200px;
height: 400px;
`
const Filtros = styled.div`
    margin-left: 10px;
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
    render() {
        return(
            <Divforms>
                <Filtros>
                    <h2>Filtros</h2>

                    <Form>
                        <label htmlFor="valormin">Valor mínimo:</label>
                        <Input type="number" id="valormin" name="valormin"/>
                        <label htmlFor="valormax">Valor máximo:</label>
                        <Input type="number" id="valormax" name="valormax"/>
                        <label htmlFor="nome">Busca por nome:</label>
                        <Input type="text" id="nome" name="nome"/>
                    </Form>
                </Filtros>
            </Divforms>
        );
    }
}

export default Filtro;