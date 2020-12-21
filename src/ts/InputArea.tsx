import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import InputBox from './Input';

type inputAreaProps = {

}

type inputAreaState = {

}

class InputArea extends Component<inputAreaProps, inputAreaState> {

    constructor(props: inputAreaProps) {
        super(props);
    }

    render() {
        return(
            <Container>
                <InputBox/>
                <InputBox/>
            </Container>
        )
    }
}

export default InputArea;