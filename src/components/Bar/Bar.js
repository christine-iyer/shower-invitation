import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css';



export default function Bar(props) {
  return (
    <>
    <Navbar className="navbar-left" bg="light" variant="dark" width='100%'>
    <Nav >
        <Link to="/">
        <h6>Word Game</h6>
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

</Navbar>
</>
  );
}