import React from 'react'
import "../App.css"
import {Navbar, Nav, Container} from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddContact from './AddContact';
import Contactform from '../Contactform';



export default function Navbars() {
  return (
   <>
   
   <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
              <Nav.Link as={Link} to={"/addcontact"}>Add Contact</Nav.Link>
              <Nav.Link as={Link} to={"/contactformedit"}>Edit Contact</Nav.Link>

              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

    

    
    
   
   
   </>
  )
}
