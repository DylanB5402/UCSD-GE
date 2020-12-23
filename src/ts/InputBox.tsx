import React, { Component } from 'react';
import { Col, Container, Form    } from 'react-bootstrap';
import InputProps from './InputProps';

class InputBox extends Component<InputProps, InputState> {

    constructor(props : InputProps) {
        super(props);
        this.state = {
            apClass: "",
            score: 0,
        }
    }

    render() {
        return (
            <Container>
                <Form.Group>
                    <Form.Row>
                        <Col sm = {8}>
                            <Form.Control as ="select" onChange = {e => this.setState({apClass: e.target.value})}>
                                <option> Choose... </option>
                                <option> AP Art (Drawing, 2D Art and Design, 3D Art and Design) </option>
                                <option> AP Art History </option>
                                <option> AP Biology </option>
                                <option> AP Chemistry </option>
                                <option> AP Computer Science A</option>
                                <option> AP Computer Science Principles</option>
                                <option> AP Microeconomics </option>
                                <option> AP Macroeconomics </option>
                                <option> AP English Language and Composition </option>
                                <option> AP English Composition and Literature </option>
                                <option> AP Environmental Science </option>
                                <option> AP Government and Politics: United States </option>
                                <option> AP Government and Politics: Comparative </option>
                                <option> AP History: United States </option>
                                <option> AP History: European </option>
                                <option> AP History: World </option>
                                <option> AP Human Geography </option>
                                <option> AP Chinese</option>
                                <option> AP French </option>
                                <option> AP German </option>
                                <option> AP Italian </option>
                                <option> AP Japanese </option>
                                <option> AP Spanish </option>
                                <option> AP Latin: Virgil </option>
                                <option> AP Latin: Literature </option>
                                <option> AP Spanish Literature </option>
                                <option> AP Calculus AB </option>
                                <option> AP Calculus BC </option>
                                <option> AP Music Theory</option>
                                <option> AP Physics (1 or 2) </option>
                                <option> AP Physics C: Mechanics </option>
                                <option> AP Physics C: Electricity and Magnetism </option>
                                <option> AP Psychology </option>
                                <option> AP Statistics </option>
                                <option> AP </option>
                            </Form.Control>
                        </Col>
                        <Col sm = {2}>
                            <Form.Control as="select" onChange = {e => this.setState({score: Number(e.target.value)})}>
                                <option> Choose... </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </Form.Control>
                        </Col>  
                    </Form.Row>
                        <p>{this.state.apClass}</p>
                        <p>{this.state.score}</p>
                </Form.Group>
            </Container>
        )   
    }
}



type InputState = {
    apClass: String;
    score: Number;
}

export default InputBox;
