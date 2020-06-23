import React  from 'react';
import {Container,Col,Row,Card, Button} from 'react-bootstrap'


function HomePage() {

  return (
    <Container fluid >
        <Row style={{marginTop:.1*window.innerHeight+"px"}}>
            <Col md={2}/>

            <Col md={3} >
                <Button border="primary" block size="lg" style={{height:.15*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/leagues')}}>
                    Leagues
                </Button>
            </Col>

            <Col md={2}/>

            <Col md={3}>
                <Button border="primary" block size="lg" style={{height:.15*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/inMatch')}}>
                    In-Match
                </Button>
            </Col>
        </Row>

        <Row style={{marginTop:.1*window.innerHeight+"px"}}>
            <Col md={2}/>

            <Col md={3}>
                <Button border="primary" block size="lg"  style={{height:.15*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/teams')}}>
                    Teams
                </Button>
            </Col>

            <Col md={2}/>

            <Col md={3}>
                <Button border="primary" block size="lg"  style={{height:.15*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/players')}}>
                    Players
                </Button>
            </Col>
        </Row>

        <Row style={{marginTop:.1*window.innerHeight+"px",marginLeft:0.12*window.innerHeight+"px",height:.15*window.innerHeight+"px"}} >
            <Col md={4}/>

            <Col md={3}>
                <Button border="primary" block size="lg" style={{height:.15*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/head2head')}}>
                    Head-2-Head
                </Button>
            </Col>


        </Row>

    </Container>
  );
}

export default HomePage;
