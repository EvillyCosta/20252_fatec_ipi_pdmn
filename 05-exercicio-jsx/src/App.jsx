import React, { Component } from "react";
import MegaSena from "./MegaSena"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numerosSorteados: this.geraAleatorios()
    }
  }

  geraAleatorios = () => {

    const numeros = []
    while (numeros.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1
      numeros.push(numeroAleatorio)
    }

    return numeros
  }


  gerarJogo = () => {
    this.setState({ numerosSorteados: this.geraAleatorios() })
  }

  render() {
    return (
        <Container>
          <Row>
            <Col>
            <MegaSena 
              numeros={this.state.numerosSorteados}
              gerarNumero={this.gerarJogo}/>
            </Col>
          </Row>
        </Container>
      )

  }
}

export default App