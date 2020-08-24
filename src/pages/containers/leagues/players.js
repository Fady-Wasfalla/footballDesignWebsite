import React, { useState, useEffect }  from 'react';
import axios from 'axios'

import {Container,Col,Row,Card, Button, Form} from 'react-bootstrap'
import domtoimage from 'dom-to-image';
import { MenuItem ,TextField } from '@material-ui/core'


import background from '../../../images/background.jpg'


function LeaguePlayers() {

    const [clientLeagues,setclientLeagues]=useState([])
    const [leagueId, setleagueId] = React.useState('');
    const [playersNumber,setplayersNumber]=useState(10)
    const [players,setPlayers]=useState([])
    const [fontSizeInp,setfontSize]=useState(15)
    const [logoSize,setlogoSize]=useState(30)



    const fontFamilyTypes = [
        "Arial, sans-serif	",
        "Andale Mono, monospace	",
        "Trattatello, fantasy	",
        "New Century Schoolbook, TeX Gyre Schola, serif",
      ]
    const [fontFamilyType,setfontFamilyType]=useState(fontFamilyTypes[0])

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
               console.log(res.data.client)
            }
          ).catch((e)=>{
        })
        }
        catch(e){
          console.log(e)
        }
    }, [])

    const handleChange = (event) => {
        const MatrixLiveInfo = JSON.parse(localStorage.getItem("MatrixLiveInfo"))
        try{
            axios({
            method: 'post',
            url: 'http://koramania.cloudapp.net/statsspider/api/GetLeaguePlayersTopGoals',
            headers: {
              Authorization:MatrixLiveInfo.Token
            },
            params: {
              clientId:MatrixLiveInfo.ClientId
            },
            data: {
                "leagueId" :event.target.value,
            }
            }).then(
            res => {
                console.log(res.data.LeaguePlayersTopGoals)
                setPlayers(res.data.LeaguePlayersTopGoals)
                
            }
            ).catch((e)=>{
          })
          }
        catch(e){
            console.log(e)
        }
        setleagueId(event.target.value);
      };

    const downloadPhoto=()=>{ 
        domtoimage.toJpeg(document.getElementById('id'), { quality: 0.95 })
        .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'MatrixLive_TopSoccers.jpeg';
        link.href = dataUrl;
        link.click();
        });
    }
  return (
    <Container fluid >
    <Card style={{marginTop:.05*window.innerHeight+"px"}} border="dark" text="white">
    <Card.Header style={{backgroundColor:"#0169d9",fontSize:"30px"}}>Top Soccers</Card.Header>
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
                            id="PlayersNumber"
                            label="Players Number"
                            variant="outlined"
                            type="number"
                            defaultValue={10}
                            InputProps={{ inputProps: { min: 5, step:1,max:30 } }}
                            onChange={(e)=>{setplayersNumber(e.target.value)}}
                            helperText="Number of players to be shown"
                            />
                        </Col>

                    </Row>

                    <Row style={{marginTop:"10px"}}>

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
                    <Row style={{marginTop:"10px"}}>
                    <Col md={12}>
                    <Row  style={{fontSize:fontSizeInp+"px"}}>
                        
                        <Col md={1} style={{textAlign:"center"}}>Rank</Col>

                        <Col md={3}><Col md={{span:7}}><Col >Player</Col></Col></Col>
                        
                        <Col md={3}><Col md={{offset:2}}>Team</Col></Col>
                        
                        <Col md={3} style={{textAlign:"center"}}>Goals</Col>
                        
                    </Row>
                    </Col> 
                    </Row>
                {   players.slice(0,playersNumber).map((e,index)=>{
                            return (
                                  <Row style={{marginTop:"10px"}} key={players[index].PlayerId}>
                                  <Col md={12}>
                                  <Row  style={{fontSize:fontSizeInp+"px"}}>
                                    
                                    <Col md={1} style={{textAlign:"center"}}>{index+1} .</Col>
                                    
                                    <Col md={3} style={{marginLeft:"5px"}}> 
                                      {players[index].PlayerName}
                                    </Col>

                                    <Col md={3} > 
                                        <img src={"http://koramania.cloudapp.net/FBMSImages/"+players[index].TeamLogo}
                                        alt={players[index].PlayerId} width={logoSize} height={logoSize} style={{marginRight:"5px"}} />
                                        {players[index].TeamName}
                                    </Col>
                                    
                                    <Col md={3} style={{textAlign:"center"}}> 
                                      {players[index].Goals}
                                    </Col>
                                      
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

export default LeaguePlayers;
