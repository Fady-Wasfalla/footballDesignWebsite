import React, { useState, useEffect }  from 'react';
import {Container,Col,Row,Card, Button, Form} from 'react-bootstrap'
import domtoimage from 'dom-to-image';
import axios from 'axios'
import { MenuItem ,TextField } from '@material-ui/core'

import background from '../../../images/background.jpg'


function LeagueTeams() {
    const [clientLeagues,setclientLeagues]=useState([])
    const [League,setLeague]=useState([])
    const [leagueId, setleagueId] = React.useState('');

    const [logoSize,setlogoSize]=useState(30)
    const [fontSizeInp,setfontSize]=useState(15)

    const fontFamilyTypes = [
      "Arial, sans-serif	",
      "Andale Mono, monospace	",
      "Trattatello, fantasy	",
      "New Century Schoolbook, TeX Gyre Schola, serif",
    ]
    const [fontFamilyType,setfontFamilyType]=useState(fontFamilyTypes[0])


  const handleChange = (event) => {
    const MatrixLiveInfo = JSON.parse(localStorage.getItem("MatrixLiveInfo"))
    try{
        axios({
        method: 'post',
        url: 'http://koramania.cloudapp.net/statsspider/api/getseasonstandings',
        headers: {
          Authorization:MatrixLiveInfo.Token
        },
        params: {
          clientId:MatrixLiveInfo.ClientId
        },
        data: {
            "leagueId" :event.target.value,
            "teamtype": 0 // what is teamtype
        }
        }).then(
        res => {
             setLeague(res.data.SeasonStandings)
          }
        ).catch((e)=>{
      })
      }
    catch(e){
        console.log(e)
    }
    setleagueId(event.target.value);
  };



    useEffect(() => {
        const MatrixLiveInfo = JSON.parse(localStorage.getItem("MatrixLiveInfo"))
        try{
          axios({
          method: 'post',
          url: 'http://koramania.cloudapp.net/statsspider/live/liveClient',
          headers: {
            Authorization:MatrixLiveInfo.Token
          },
          params: {
            clientId:MatrixLiveInfo.ClientId
          }
          }).then(
          res => {
               setclientLeagues(res.data.client)
            }
          ).catch((e)=>{
            // alert("You have an invalid mail or password")
        })
        }
        catch(e){
          console.log(e)
        }
    }, [])

    const downloadPhoto=()=>{
        let options = { "quality": 0.95 }
        domtoimage.toJpeg(document.getElementById('id'), options)
        .then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'MatrixLive_SeasonStangins.jpeg';
        link.href = dataUrl;
        link.click();
        });
      //   html2canvas(document.getElementById('id')).then(function(canvas) {
      //     let image = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");  
      //     console.log(image)
      //     window.location.href=image;
      // });
    }
    
  return (
    <Container fluid >
    <Card style={{marginTop:.05*window.innerHeight+"px"}} border="dark" text="white">
    <Card.Header style={{backgroundColor:"#0169d9",fontSize:"30px"}}>League Season Standing</Card.Header>
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
                            <TextField
                              id="league"
                              select
                              variant="outlined"
                              label="League"
                              value={leagueId}
                              onChange={handleChange}
                              helperText="Select League"
                            >
                            {      
                            clientLeagues.map((e,index)=>{
                                    return (
                                    <MenuItem value={clientLeagues[index].LeagueId}  key={clientLeagues[index].LeagueId}>
                                        {clientLeagues[index].LeagueName} 
                                    </MenuItem>
                                        )
                                    }
                                    )            
                            }
                            </TextField>
                      </Col>
                      
                      <Col>
                        <TextField
                        id="logoSize"
                        label="Logo Size"
                        variant="outlined"
                        type="number"
                        defaultValue={30}
                        InputProps={{ inputProps: { min: 20, step:5 } }}
                        onChange={(e)=>{setlogoSize(e.target.value)}}
                        />
                      </Col>

                    </Row>

                    <Row style={{marginTop:"10px"}}>
                      <Col>
                        <TextField
                        id="fontSize"
                        variant="outlined"
                        label="Font Size"
                        type="number"
                        defaultValue={15}
                        InputProps={{ inputProps: { min: 5, step:1 } }}
                        onChange={(e)=>{setfontSize(e.target.value)}}
                        />
                      </Col>

                      <Col >
                            <TextField
                              id="Font Family"
                              select
                              variant="outlined"
                              label="Font Family"
                              value={fontFamilyType}
                              onChange={(e)=>{setfontFamilyType(e.target.value)}}
                              helperText="Select Font Family"
                            >
                            {      
                            fontFamilyTypes.map((e,index)=>{
                                    return (
                                    <MenuItem style={{fontFamily:fontFamilyTypes[index]}} value={fontFamilyTypes[index]}  key={fontFamilyTypes[index]}>
                                        {fontFamilyTypes[index]} 
                                    </MenuItem>
                                        )
                                    }
                                    )            
                            }
                            </TextField>
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
                <Card style={{fontFamily:fontFamilyType}} >
                <div id="id" style={{position:"relative",width:"880px",minHeight:"250px",backgroundImage:"url(" + background +")"}}> 
                <Row style={{fontFamily:fontFamilyType}}>
                <Col md={12}>
                <Row  style={{fontSize:fontSizeInp+"px",textAlign:"center"}}>

                    <Col md={4}> <Col md={{span:6}}> Team</Col> </Col>
                    
                    <Col md={1}>POS</Col>
                    
                    <Col md={3}>
                      <Row>
                        <Col md={3}>T</Col>
                        <Col md={3}>W</Col>
                        <Col md={3}>D</Col>
                        <Col md={3}>L</Col>
                      </Row>
                    </Col>

                    <Col md={3}>
                      <Row>
                        <Col md={4}>GS</Col>
                        <Col md={4}>GR</Col>
                        <Col md={4}>GD</Col>
                      </Row>
                    </Col>
                    
                    <Col md={1}>PTS</Col>
                   
                </Row>
                </Col> 
                </Row>
                    {
                        League.map((e,index)=>{
                            return (
                                  <Row style={{marginTop:"10px"}}>
                                  <Col md={12}>
                                  <Row  style={{fontSize:fontSizeInp+"px"}}>
                                      <Col md={4} > 
                                        <img src={"http://koramania.cloudapp.net/FBMSImages/"+League[index].TeamLogo}
                                        alt={League[index].TEAMNAME} width={logoSize} height={logoSize} style={{marginRight:"5px"}} />
                                        {League[index].TEAMNAME} 
                                      </Col>

                                      <Col md={1} style={{textAlign:"center"}}>{League[index].TeamPosition}</Col>
                                      
                                      <Col md={3} style={{textAlign:"center"}}>
                                        <Row>
                                          <Col md={3}>{League[index].MATCHESPLAYED}</Col>
                                          <Col md={3}>{League[index].MATCHESWON}</Col>
                                          <Col md={3}>{League[index].MATCHESDRAW}</Col>
                                          <Col md={3}>{League[index].MATCHESLOST}</Col>
                                        </Row>
                                      </Col>

                                      <Col md={3} style={{textAlign:"center"}}>
                                        <Row>
                                          <Col md={4}>{League[index].GOALSSCORED}</Col>
                                          <Col md={4}>{League[index].GOALSRECEIVED}</Col>
                                          <Col md={4}>{League[index].GOALDIFFERENCE}</Col>
                                        </Row>
                                      </Col>
                                      
                                      <Col md={1} style={{textAlign:"center"}}>{League[index].POINTS}</Col>

                                  </Row>
                                  </Col> 
                                  </Row>
                            )
                            }
                            )
                    }
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

export default LeagueTeams;
