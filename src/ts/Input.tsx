import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';
import InputProps from './InputProps';

class InputBox extends Component<InputProps, InputState> {

    constructor(props : InputProps) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Form.Group>
                    <Form.Control as="select">
                        <option>Default select</option>
                    </Form.Control>
                </Form.Group>
            </Container>
        )   
    }
}



type InputState = {
    class: String;
    score: Number;
}

export default InputBox;
// export default InputProps;