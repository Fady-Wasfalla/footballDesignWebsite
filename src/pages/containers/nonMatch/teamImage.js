import React  from 'react';
import {Container,Col,Row,Card, Button, Form} from 'react-bootstrap'
import { Parallax } from "react-parallax";
import domtoimage from 'dom-to-image';


import background from '../../../images/background.jpg'


function TeamImage() {


        const downloadPhoto=()=>{ 
        domtoimage.toJpeg(document.getElementById('id'), { quality: 0.95 })
        .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'MatrixLive_####.jpeg';
        link.href = dataUrl;
        link.click();
        });
    }
  return (
    <Container fluid >
    <Card style={{marginTop:.05*window.innerHeight+"px"}} border="dark" text="white">
    <Card.Header style={{backgroundColor:"#0169d9",fontSize:"30px"}}>Team Image</Card.Header>
    <Col md={12}>
         <Row style={{marginTop:.05*window.innerHeight+"px"}}>
            <Col md={6} >
                <Card border="dark" text="dark">
                <Card.Body>
                <Card.Title>Data</Card.Title>
                <Col md={{span:12,offset:0}} >
                <hr style={{color: "black",backgroundColor: "black",height: 1}} />
                </Col>
                <Form>

                    <Row>

                    <Col >
                    <Form.Group >
                        <Form.Label>Input 1</Form.Label>
                        <Form.Control type="input" placeholder="Enter email" />
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group >
                        <Form.Label>Input 2</Form.Label>
                        <Form.Control type="input" placeholder="Enter email" />
                    </Form.Group>
                    </Col>

                    </Row>

                </Form>

                </Card.Body>
                </Card>
            </Col>

            <Col md={6} >
                <Button onClick={()=>downloadPhoto()}>Save</Button>
                <hr
                style={{
                    color: "black",
                    backgroundColor: "black",
                    height: 1}} />
                <Card >
                <div style={{height:"auto"}} id="id"> 
                 <Parallax bgImage={background} >
                    <br/><br/><br/><br/><br/><br/><br/>
                    Image
                    <br/><br/><br/><br/><br/><br/><br/>
                 </Parallax>
                 </div>
                </Card>
            </Col>
        </Row>
        <Row style={{marginTop:.1*window.innerHeight+"px"}}/>
        </Col>
        </Card>
        <Row style={{marginTop:.05*window.innerHeight+"px"}}/>
    </Container>
  );
}

export default TeamImage;
