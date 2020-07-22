import React  from 'react';
import {Container,Col,Row, Button,Card} from 'react-bootstrap'
import StatImg from '../../../images/stat.png'
import StatImg2 from '../../../images/stat2.png'

function NonMatch() {

  return (
    <Container fluid >
    <Card style={{marginTop:.05*window.innerHeight+"px"}} border="dark" text="white">
    <Card.Header style={{backgroundColor:"#000",textAlign:"center",fontSize:"30px"}}>Non-Match</Card.Header>
    <Col md={12}>
     <Row style={{marginTop:.05*window.innerHeight+"px"}}>
        <Col md={2}/>

        <Col md={3} >
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/nonMatch/MatchAppointments')}}>
                Matches Appointments
            </Button>
            <Card.Img variant="bottom" src={StatImg} style={{height:.2*window.innerHeight+"px"}} />
            </Card>
        </Col>

        <Col md={2}/>

        <Col md={3}>
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/nonMatch/teamImage')}}>
                Team Image
            </Button>
            <Card.Img variant="bottom" src={StatImg2} style={{height:.2*window.innerHeight+"px"}} />
            </Card>
        </Col>
    </Row>

    <Row style={{marginTop:.05*window.innerHeight+"px"}}>
        <Col md={2}/>

        <Col md={3} >
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/nonMatch/playerQuote')}}>
                Player Quote
            </Button>
            <Card.Img variant="bottom" src={StatImg} style={{height:.2*window.innerHeight+"px"}} />
            </Card>
        </Col>

        <Col md={2}/>

        <Col md={3}>
            <Card>
            <Button variant="dark" block size="lg" style={{height:.1*window.innerHeight+"px"}} onClick={()=>{window.location.assign('/nonMatch/playerBirthday')}}>
                Player Birthday
            </Button>
            <Card.Img variant="bottom" src={StatImg2} style={{height:.2*window.innerHeight+"px"}} />
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

export default NonMatch ;
