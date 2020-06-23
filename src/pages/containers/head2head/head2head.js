import React  from 'react';
import {Container,Col,Row,Card, Button} from 'react-bootstrap'


function Head2Head() {

  return (
    <Container fluid >
         <Row style={{marginTop:.25*window.innerHeight+"px"}}>
            <Col md={2}/>

            <Col md={3} >
                <Button border="primary" block size="lg" style={{height:.15*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/head2head/teams')}}>
                    Teams
                </Button>
            </Col>

            <Col md={2}/>

            <Col md={3}>
                <Button border="primary" block size="lg" style={{height:.15*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/head2head/teams')}}>
                    Players
                </Button>
            </Col>
        </Row>

    </Container>
  );
}

export default Head2Head;
