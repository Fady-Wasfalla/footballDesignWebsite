import React  from 'react';
import {Container,Col,Row,Card, Button} from 'react-bootstrap'
import styled from 'styled-components';
import { Parallax } from "react-parallax";
import html2canvas from 'html2canvas';


import background from '../../../images/background.jpg'

const AppWrapper = styled.div`
    background-image:'url(${background})'; 
    background-position: 'center' ;
    background-repeat: 'no-repeat';
    background-ize:'auto'
`;

const imageStyle ={
    backgroundImage:`url(${background})` , 
    backgroundPosition: 'center' , 
    backgroundRepeat: 'no-repeat',
    backgroundSize:'auto'
}

function Head2HeadTeams() {

    const downloadPhoto=()=>{ 
        html2canvas(document.getElementById('id')).then(function(canvas) {
            let image = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");  
            console.log(image)
            window.location.href=image;
        });
    }
  return (
    <Container fluid >
         <Row style={{marginTop:.05*window.innerHeight+"px"}}>
            <Col md={6}>

            </Col>

            <Col md={6}>
                <Button onClick={()=>downloadPhoto()}>Save</Button>
                <Card>
                <div style={{height:"auto"}} id="id"> 
                 <Parallax bgImage={background} >
              
                 </Parallax>
                 </div>

                </Card>
            </Col>
        </Row>

    </Container>
  );
}

export default Head2HeadTeams;
