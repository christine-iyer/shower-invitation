import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function Bar(props) {
  return (
    <>
    <Navbar  style={{backgroundColor: 'rgba(23,45,65,.7)'}}className="navbar-left" bg="dark" variant="light" width='100%'>
      <Container >

    <Nav >
        <Link to="/haikus">
        <h6>Haikus</h6>
      </Link>
      
   &nbsp;  &nbsp;
     &nbsp;
      <Link to="/blahg">
        <h6>Franky</h6>
      </Link>
     
  

      
 &nbsp;&nbsp; 
  

</Nav>
</Container>
</Navbar>
</>
  );
}