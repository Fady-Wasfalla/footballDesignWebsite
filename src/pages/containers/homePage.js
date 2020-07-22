import React  from 'react';
import {Container,Col,Row, Button,Card} from 'react-bootstrap'

function HomePage() {

  return (
    <Container fluid >
    <Card style={{marginTop:.05*window.innerHeight+"px"}} border="dark" text="white">
    <Card.Header style={{backgroundColor:"#000",fontSize:"30px"}}>Home</Card.Header>
    <Col md={12}>

    <Row style={{marginTop:.05*window.innerHeight+"px"}}>
        <Col md={2}/>
        <Col md={3} >
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/league')}}>
            Leagues - Season Standing
            </Button>
            </Card>
        </Col>
        <Col md={2}/>
        <Col md={3}>
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/inMatch')}}>
            In-Match
            </Button>
            </Card>
        </Col>
    </Row>

    <Row style={{marginTop:.05*window.innerHeight+"px"}}>
        <Col md={2}/>
        <Col md={3} >
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/head2head')}}>
            Head-2-Head
            </Button>
            </Card>
        </Col>
        <Col md={2}/>
        <Col md={3}>
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/nonMatch')}}>
            Non-Match
            </Button>
            </Card>
        </Col>
    </Row>

    <Row style={{marginTop:.05*window.innerHeight+"px"}}/>
    </Col>
    </Card>
    <Row style={{marginTop:.05*window.innerHeight+"px"}}/>

    </Container>
  );
}

export default HomePage ;
