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
        <Link to="/haikus">
        <h1>Haikus</h1>
      </Link>
   &nbsp;  &nbsp;
     &nbsp;
      <Link to="/blahg">
        <h1>Franky</h1>
      </Link>
     
  

      
 &nbsp;&nbsp; 
  

</Nav>
</Container>
</Navbar>
</>
  );
}