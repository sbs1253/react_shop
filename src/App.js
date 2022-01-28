/*eslint-disable */
import './App.css';
import { Nav,Container,Navbar,NavDropdown,Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import  Data from "./data"
import {Link, Route, Switch} from "react-router-dom"
import Detail from './Detail';
import axios from 'axios';


function App() {
  let [shoes, shoes변경] =useState(Data)
  let [loading, setLoading] = useState(false)
  let[재고, 재고변경]=useState([10,11,12])
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">shoeshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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
      

    <Switch>
      <Route exact path="/">
        <div className="background">
          <h1 className="main_sale "> 20% Season OFF</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <Button variant="primary ">Primary</Button>
        </div>
        <div className='container'>
          <div className='row'>
          {shoes.map((data,i)=>{return (<ShoesData key={i} shoes={data} i={i}/>)})}
          </div>    
          {loading? <div>로딩중입니다.</div>:null}
          <button className='btn btn-primary' onClick={()=>{
            setLoading(true)
            axios.get(`https://codingapple1.github.io/shop/data2.json`)
            .then((respone)=>{
              shoes변경([...shoes, ...respone.data])
              setLoading(false)
            })
            .catch(()=>{console.log("실패")})
          }}>더보기</button>
        </div>
      </Route>
      <Route path="/detail/:id" >
        <Detail shoes ={shoes} 재고={재고}/>
      </Route>
      <Route path={"/:id"}>
        <div>Swich는 중복허용 안한다는 뜻</div>
      </Route>
    </Switch>



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

/*
    post요청: ex) axios.post('서버 URL',{id:'apple',pw:1234})
 */
