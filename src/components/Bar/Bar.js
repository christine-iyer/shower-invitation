import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css';



export default function Bar(props) {
  return (
    <>
    <Navbar className="navbar-left" bg="light" variant="dark" width='100%'>
      <Container >


    <Nav >

    <Link to="/carousel">
        <h6>Carousel</h6>
      </Link>
      &nbsp;  &nbsp;
     &nbsp;
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