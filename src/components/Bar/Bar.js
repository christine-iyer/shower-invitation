import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Bar(props) {
  return (
    <>
    <Navbar  className="navbar-left" bg="light" variant="light" width='100%'>
      <Container >
    <Nav >
    <Link to="/" target="_blank" rel="noreferrer">
        <h1>HomePage</h1>
      </Link>
      <Link to="/blocks" target="_blank" rel="noreferrer">
        <h1>Franky</h1>
      </Link>
    
     
      <Link to="/haikus" target="_blank" rel="noreferrer">
        <h1>Haikus</h1>
      </Link>

      
 &nbsp;🧞‍♂️🧜🏿‍♀️🧞 &nbsp;
  
         
        
          {/* <Link to="/times" target="_blank" rel="noreferrer">
            <img src={Times} alt='times'></img>
          </Link>
          <Link to="/vibes" target="_blank" rel="noreferrer">
            <img src={Vibes} alt='vibin'></img>
          </Link> */}
</Nav>
</Container>
</Navbar>
</>
  );
}