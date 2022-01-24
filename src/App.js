/*eslint-disable */
import './App.css';
import { Nav,Container,Navbar,NavDropdown,Button } from 'react-bootstrap';
import { useState } from 'react';
import  Data from "./data"

function App() {
  let [shoes, shoes변경] =useState(Data)
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">shoeshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    <div className="background">
        <h1 className="main_sale "> 20% Season OFF</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Button variant="primary ">Primary</Button>
      </div>

    <div className='container'>
      <div className='row'>
        {shoes.map((data,i)=>{return (<ShoesData shoes={data} i={i}/>)})}
      </div>
    </div>
    </div>
  );
}

function ShoesData({shoes,i}){
  return(
          <div className='col-md-4'>
          <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`}width="100%" alt="shoes"/>
          <h4>{shoes.title}</h4>
          <p>{shoes.content}&{shoes.price}</p>
        </div>)
}
export default App;
