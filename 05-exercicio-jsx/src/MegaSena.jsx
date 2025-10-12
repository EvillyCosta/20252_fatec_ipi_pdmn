import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class MegaSena extends Component {
    render() {

        return (
            <Card>
                <Card.Header>MegaSena</Card.Header>
                    <Card.Body>
                        <ListGroup horizontal>
                            {this.props.numeros.map((n, i) => (
                                <ListGroup.Item key={i}>{n}</ListGroup.Item>
                            ))}  
                        </ListGroup>
                        <Button onClick={this.props.gerarNumero} className= "w-100" variant="outline-success">Gerar Jogo</Button>
                    </Card.Body>
            </Card>
        );
    }
}


export default MegaSena