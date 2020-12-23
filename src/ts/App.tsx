import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import InputArea from './InputArea';
import Parent from './Parent';

function App() {
  return (
    <Container className = "p1">
      <Jumbotron>
        <h1 className = "header">
          UCSD GEs
        </h1>
      </Jumbotron>
      
      <h3 style={{textAlign: "center"}}>
        Ever been confused about what GE classes you're supposed to take?
      </h3>
      <h3 style={{textAlign: "center"}}>
        Wonder what college has the least GEs for you?
      </h3>
      <h3 style={{textAlign: "center"}}>
        This site is made to help you out. Start by picking a college and entering which AP exams you passed with a 3, 4, or 5.
      </h3>

      <Container className = "labels">
        <Row>
          <h1> </h1>
        </Row>
        <Row>
          <Col>
            <h4 style={{textAlign: "center"}}>Class</h4>
          </Col>
          <Col>
          <h4 style={{textAlign: "center"}}>Score</h4>
          </Col>
        </Row>
      </Container>

      <Container className = "input-boxes">
        <InputArea/>
      </Container>
      {/* <Parent/> */}
    </Container>
    
  );
}

export default App;
