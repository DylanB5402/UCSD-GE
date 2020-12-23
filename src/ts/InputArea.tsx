import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import InputBox from './InputBox';

type inputAreaProps = {

}

type inputAreaState = {

}

class InputArea extends Component<inputAreaProps, inputAreaState> {
    
    inputBoxes: String[];
    alpha: InputBox;

    constructor(props: inputAreaProps) {
        super(props);
        this.inputBoxes = [];
        for (let i = 1; i <= 7; i++) {
           this.inputBoxes.push("InputBox" + String(Number(i)));
        }
        
        this.alpha = new InputBox({});
        // this.handleData = this.handleData.bind
    }

    render() {
        return( 
            <Container onClick = {()=>this.alpha.forceUpdate()}>
                {/* {this.inputBoxes.map(a => (<InputBox key = {String(a)} />))}
                <p></p> */}
                {/* {this.alpha} */}
                <InputBox/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Container>    
        )
    }
}

export default InputArea;