import React  from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

function Header() {

  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Matrix Live</Navbar.Brand>
    <Nav className="mr-auto">
      
      <NavDropdown title="Leagues - Season Standing" id="league" >
        <NavDropdown.Item href="/league" >Leagues - Season Standings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/league/teams">Season Standings</NavDropdown.Item>
        <NavDropdown.Item href="/league/players">Top Soccers</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="In-Match" id="inMatch">
        <NavDropdown.Item href="/inMatch">In-Match</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/inMatch/kickoff">Kick Off</NavDropdown.Item>
        <NavDropdown.Item href="/inMatch/substitution">Substitution</NavDropdown.Item>
        <NavDropdown.Item href="/inMatch/substitutionNoPhoto">Substitution (no photos)</NavDropdown.Item>
        <NavDropdown.Item href="/inMatch/goal1">Goal 1</NavDropdown.Item>
        <NavDropdown.Item href="/inMatch/goal2">Goal 2</NavDropdown.Item>
        <NavDropdown.Item href="/inMatch/half-full-time">Half / Full Time</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Head-2-Head" id="head2head">
        <NavDropdown.Item href="/head2head">Head-2-Head</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/head2head/teams">Teams</NavDropdown.Item>
        <NavDropdown.Item href="/head2head/players">Players</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Non-Match" id="nonMatch">
        <NavDropdown.Item href="/nonMatch">Non-Match</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/nonMatch/MatchAppointments">Matches Appointments</NavDropdown.Item>
        <NavDropdown.Item href="/nonMatch/teamImage">Team Image</NavDropdown.Item>
        <NavDropdown.Item href="/nonMatch/playerQuote">Player Quote</NavDropdown.Item>
        <NavDropdown.Item href="/nonMatch/playerBirthday">Player Birthday</NavDropdown.Item>
      </NavDropdown>

    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  );
}

export default Header;
