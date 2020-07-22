import React  from 'react';
import {Container,Col,Row, Button,Card} from 'react-bootstrap'
import StatImg from '../../../images/stat.png'
import StatImg2 from '../../../images/stat2.png'

function InMatch() {

  return (
    <Container fluid >
    <Card style={{marginTop:.05*window.innerHeight+"px"}} border="dark" text="white">
    <Card.Header style={{backgroundColor:"#000",textAlign:"center",fontSize:"30px"}}>In-Match</Card.Header>
    <Col md={12}>
     <Row style={{marginTop:.05*window.innerHeight+"px"}}>
        <Col md={2}/>
        <Col md={3} >
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/inMatch/kickoff')}}>
                Kick Off
            </Button>
            <Card.Img variant="bottom" src={StatImg} style={{height:.25*window.innerHeight+"px"}} />
            </Card>
        </Col>

        <Col md={2}/>
        <Col md={3} >
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/inMatch/half-full-time')}}>
            Half / Full Time
            </Button>
            <Card.Img variant="bottom" src={StatImg} style={{height:.25*window.innerHeight+"px"}} />
            </Card>
        </Col>
    </Row>

    <Row style={{marginTop:.05*window.innerHeight+"px"}}>
        <Col md={2} style={{marginLeft:.04*window.innerWidth+"px"}}>
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/inMatch/substitution')}}>
            Substitution
            </Button>
            <Card.Img variant="bottom" src={StatImg} style={{height:.2*window.innerHeight+"px"}} />
            </Card>
        </Col>
        <Col md={1}/>
        <Col md={2}>
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/inMatch/substitutionNoPhoto')}}>
            Substitution (no photos)
            </Button>
            <Card.Img variant="bottom" src={StatImg2} style={{height:.2*window.innerHeight+"px"}} />
            </Card>
        </Col>

        <Col md={1}/>
        <Col md={2} >
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/inMatch/goal1')}}>
            Goal 1
            </Button>
            <Card.Img variant="bottom" src={StatImg} style={{height:.2*window.innerHeight+"px"}} />
            </Card>
        </Col>
        <Col md={1}/>
        <Col md={2}>
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/inMatch/goal2')}}>
            Goal 2
            </Button>
            <Card.Img variant="bottom" src={StatImg2} style={{height:.2*window.innerHeight+"px"}} />
            </Card>
        </Col>
    </Row>

    <Row style={{marginTop:.05*window.innerHeight+"px"}}>
        
    </Row>

    <Row style={{marginTop:.05*window.innerHeight+"px"}}>

    </Row>


    <Row style={{marginTop:.05*window.innerHeight+"px"}}/>
    </Col>
    </Card>
    <Row style={{marginTop:.05*window.innerHeight+"px"}}/>

    </Container>
  );
}

export default InMatch ;
