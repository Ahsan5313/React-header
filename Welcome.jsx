import React, {Component} from 'react'
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


import Home from '../Components/home'
import Contact from '../Components/contact'


import Navbar from 'react-bootstrap/Navbar'
import  Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



class Welcome extends Component{


  render(){

    

    return(

      <Router>
          <div>   

            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand > <Link to="/">React-Bootstrap</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link > <Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link > <Link to="/link">Contact</Link></Nav.Link>              
                              
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

      </div>

      <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>  

        </Switch>

          
      </Router>
    )
  }

}

export default Welcome;

