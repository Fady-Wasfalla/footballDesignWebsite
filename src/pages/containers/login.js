import React ,{useState , useEffect} from 'react';
import {Container,Row,Form,Button, Col,Card} from 'react-bootstrap'
import axios from 'axios'

import Logo from '../../images/balckLogo.png'

function Login() {

  const [live_ClientEmail,setlive_ClientEmail]=useState("")
  const [live_ClientPassword,setlive_ClientPassword]=useState("")
  
  useEffect(() => {
    
  }, []);

  const login =(e)=>{
        e.preventDefault()
        console.log(live_ClientEmail,live_ClientPassword)
        axios({
            method: 'post',
            url: 'http://koramania.cloudapp.net/statsspider/live/Authenticate',
            headers: {},
            data: {
                live_ClientEmail: live_ClientEmail,
                live_ClientPassword: live_ClientPassword
            }
        }).then(
        res => {
            localStorage.setItem("MatrixLiveInfo",JSON.stringify(res.data))
            if (res.data.IsAuthenticated === true){
                window.location.assign('/home')
            }else{
                alert("You have to contact with IT to renew your deal")
            }
            //let user = JSON.parse(localStorage.getItem('user'));
        }).catch((e)=>{
            alert("You have an invalid mail or password")
        })
    }
  return (
    <Container fluid >
        {/* <Parallax bgImage={Logo} style={{height:.94*window.innerHeight}} > */}
        <Row style={{marginTop:.25*window.innerHeight+"px"}} className="justify-content-md-center" >
            <Col md={6}>
            <Card bg="light" border="primary">
                <Card.Header>Login</Card.Header>
                <Row>
                <Col xs lg="5" style={{marginLeft:.015*window.innerWidth+"px",marginTop:.035*window.innerHeight+"px"}} >
                <Form onSubmit={(e)=>{login(e)}} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setlive_ClientEmail(e.target.value)}} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setlive_ClientPassword(e.target.value)}} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col xs lg="1" />
            <Col xs lg="2">
                <img src={Logo} width="300" height="300" alt="Matrix Live Logo"/>
            </Col>
            </Row>
            </Card>
            </Col>
        </Row>
        {/* </Parallax> */}
    </Container>
  );
}

export default Login;
