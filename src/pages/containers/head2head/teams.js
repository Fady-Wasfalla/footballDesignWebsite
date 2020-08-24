import React, { useState, useEffect }  from 'react';
import {Container,Col,Row,Card, Button, Form ,ProgressBar} from 'react-bootstrap'
import { MenuItem ,TextField } from '@material-ui/core'
import axios from 'axios'
import domtoimage from 'dom-to-image';



import background from '../../../images/background.jpg'


function Head2HeadTeams() {

    const [clientLeagues,setclientLeagues]=useState([])
    const [leagueId1, setleagueId1] = useState('');
    const [leagueId2, setleagueId2] = useState('');

    const [teamsleague1,setteamsleague1] = useState([])
    const [teamsleague2,setteamsleague2] = useState([])

    const [team1,setteam1]=useState("")
    const [team2,setteam2]=useState("")

    const [teamInfo1,setteamInfo1]=useState([])
    const [teamInfo2,setteamInfo2]=useState([])

    const [teamInfoArr1,setteamInfoArr1]=useState([])
    const [teamInfoArr2,setteamInfoArr2]=useState([])


    
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
        })
        }
        catch(e){
          console.log(e)
        }
    }, [])

    const leagueHandleChange1 = (event) => {
        const MatrixLiveInfo = JSON.parse(localStorage.getItem("MatrixLiveInfo"))
        try{
            axios({
            method: 'post',
            url: 'http://koramania.cloudapp.net/statsspider/api/getteamsbyleagueid',
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
                setteamsleague1(res.data.Teams)
                console.log(res.data.Teams)
                setteam1("")
                
            }
            ).catch((e)=>{
          })
          }
        catch(e){
            console.log(e)
        }
        setleagueId1(event.target.value);
      };

      const leagueHandleChange2 = (event) => {
        const MatrixLiveInfo = JSON.parse(localStorage.getItem("MatrixLiveInfo"))
        try{
            axios({
            method: 'post',
            url: 'http://koramania.cloudapp.net/statsspider/api/getteamsbyleagueid',
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
                setteamsleague2(res.data.Teams)
                setteam2("")
            }
            ).catch((e)=>{
          })
          }
        catch(e){
            console.log(e)
        }
        setleagueId2(event.target.value);
      };


      const teamHandleChange1 = (event) => {
        const MatrixLiveInfo = JSON.parse(localStorage.getItem("MatrixLiveInfo"))
        try{
            axios({
            method: 'post',
            url: 'http://koramania.cloudapp.net/statsspider/api/GetTeamLeagueStats',
            headers: {
              Authorization:MatrixLiveInfo.Token
            },
            params: {
              clientId:MatrixLiveInfo.ClientId
            },
            data: {
                "leagueId" :leagueId1,
                "teamid":event.target.value
            }
            }).then(
            res => {
                console.log(res.data)
                setteamInfo1(res.data)
                dataSet(1,res.data)
            }
            ).catch((e)=>{
          })
          }
        catch(e){
            console.log(e)
        }
        setteam1(event.target.value);
      };

      const teamHandleChange2 = (event) => {
        const MatrixLiveInfo = JSON.parse(localStorage.getItem("MatrixLiveInfo"))
        let inpData = {}
        try{
            axios({
            method: 'post',
            url: 'http://koramania.cloudapp.net/statsspider/api/GetTeamLeagueStats',
            headers: {
              Authorization:MatrixLiveInfo.Token
            },
            params: {
              clientId:MatrixLiveInfo.ClientId
            },
            data: {
                "leagueId" :leagueId2,
                "teamid":event.target.value
            }
            }).then(
            res => {
                console.log(res.data)
                setteamInfo2(res.data)
                dataSet(2,res.data)
            }
            ).catch((e)=>{
          })
          }
        catch(e){
            console.log(e)
        }
        setteam2(event.target.value);
      };

      const dataSet = (inp,inpData) =>{
        if(inp===1 && team2!==""){
            let dataArr1 = new Array()
            let dataArr2 = new Array()

            dataArr1 = [...dataArr1,...inpData.TeamActions]
            Object.keys(inpData.TeamFigures[0]).forEach(function(key) {
                const item = {"ActionName":key,"ActionCount":inpData.TeamFigures[0][key]}
                dataArr1.push(item)
            });

            dataArr2 = [...dataArr2,...teamInfo2.TeamActions]
            Object.keys(teamInfo2.TeamFigures[0]).forEach(function(key) {
                const item = {"ActionName":key,"ActionCount":teamInfo2.TeamFigures[0][key]}
                dataArr2.push(item)
            });
            console.log(dataArr1)
            console.log(dataArr2)
        }
        if(inp===2 && team1!==""){

        }
        
      } 


    const downloadPhoto=()=>{ 
        domtoimage.toJpeg(document.getElementById('id'), { quality: 0.95 })
        .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'MatrixLive_TeamVsTeam.jpeg';
        link.href = dataUrl;
        link.click();
        });
    }
  return (
    <Container fluid >
    <Card style={{marginTop:.05*window.innerHeight+"px"}} border="dark" text="white">
    <Card.Header style={{backgroundColor:"#0169d9",fontSize:"30px"}}>Team Vs. Team</Card.Header>
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

                    <Row style={{marginTop:"10px",textAlign:"center"}}>
                        
                        <Col md={6}>
                           <Row style={{marginTop:"10px",textAlign:"center"}}>
                            <Col>
                               <h3> Team 1 </h3>
                            </Col>
                           </Row>

                            <Row style={{marginTop:"10px",textAlign:"center"}}>
                            <Col>
                                <TextField
                                    id="league1"
                                    select
                                    variant="outlined"
                                    label="League 1"
                                    value={leagueId1}
                                    onChange={leagueHandleChange1}
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
                           </Row>
                            
                            <Row style={{marginTop:"10px",textAlign:"center"}}>
                            <Col>
                                <TextField
                                        id="team1"
                                        select
                                        variant="outlined"
                                        label="Team 1"
                                        value={team1}
                                        // onPointerEnter={()=>{
                                        //     if (leagueId1===""){
                                        //         alert("you have to choose which league first")
                                        //     }
                                        // }}
                                        onChange={teamHandleChange1}
                                        helperText="Select League"
                                    >
                                    {      
                                    teamsleague1.map((e,index)=>{
                                            return (
                                            <MenuItem value={teamsleague1[index].TeamId}  key={teamsleague1[index].TeamName}>
                                                <img src={"http://koramania.cloudapp.net/FBMSImages/"+teamsleague1[index].TeamLogoSmall}
                                                alt={teamsleague1[index].TeamLogoSmall} width={25} height={25} style={{marginRight:"5px"}} />
                                                {teamsleague1[index].TeamName} 
                                            </MenuItem>
                                                )
                                            }
                                            )            
                                    }
                                </TextField>
                            </Col>
                            </Row>

                            
                           
                            
                        </Col>

                        <Col md={6}>
                            <Row style={{marginTop:"10px",textAlign:"center"}}>
                            <Col>
                                <h3> Team 2 </h3>
                            </Col>
                            </Row>

                            <Row style={{marginTop:"10px",textAlign:"center"}}>
                            <Col>
                                <TextField
                                id="league2"
                                select
                                variant="outlined"
                                label="League 2"
                                value={leagueId2}
                                onChange={leagueHandleChange2}
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
                            </Row>


                            <Row style={{marginTop:"10px",textAlign:"center"}}>
                            <Col>
                                <TextField
                                    id="team2"
                                    select
                                    variant="outlined"
                                    label="Team 2"
                                    value={team2}
                                    onChange={teamHandleChange2}
                                    // onPointerEnter={()=>{
                                    //     if (leagueId2===""){
                                    //         alert("you have to choose which league first")
                                    //     }
                                    // }}
                                    helperText="Select League"
                                    >
                                    {      
                                    teamsleague2.map((e,index)=>{
                                            return (
                                            <MenuItem value={teamsleague2[index].TeamId}  key={teamsleague2[index].TeamName}>
                                                <img src={"http://koramania.cloudapp.net/FBMSImages/"+teamsleague2[index].TeamLogoSmall}
                                                alt={teamsleague2[index].TeamLogoSmall} width={25} height={25} style={{marginRight:"5px"}} />
                                                {teamsleague2[index].TeamName} 
                                            </MenuItem>
                                                )
                                            }
                                            )            
                                    }
                                </TextField>
                            </Col>
                            </Row>
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
                <div id="id" style={{position:"relative",width:"880px",minHeight:"250px",backgroundImage:"url(" + background +")"}}> 
                <Row style={{marginTop:"10px"}}>
                <Col md={12}>
                    
                </Col>
                </Row>
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

export default Head2HeadTeams;
