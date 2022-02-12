/*eslint-disable */
import './App.css';
import { Nav,Container,Navbar,NavDropdown,Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState,lazy,Suspense } from 'react';
import  Data from "./data"
import {Link, Route, Switch} from "react-router-dom"
// import Detail from './Detail';
let Detail = lazy(()=>{return import('./Detail') })
import axios from 'axios';
import Cart from './Cart';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

let 재고context = React.createContext();

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
          <재고context.Provider value={재고}>
          <div className='row'>
          {shoes.map((data,i)=>{return (<Card key={i} shoes={data} i={i}/>)})}
          </div>    
          </재고context.Provider>

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
        <Suspense fallback={<div>로딩중이에요</div>}>
        <Detail shoes ={shoes} 재고={재고}/>
        </Suspense>
      </Route>

      <Route path={"/cart"}>
        <Cart></Cart>
      </Route>
      <Route path={"/:id"}>
        <div>Swich는 중복허용 안한다는 뜻</div>
      </Route>
    </Switch>



    </div>
  );
}

function Card({shoes,i}){
  let 재고 =useContext(재고context);
  let history = useHistory();
  return(
          <div className='col-md-4' onClick={()=>{history.push("/detail/"+ shoes.id)}}>
          <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`}width="100%" alt="shoes"/>
          <h4>{shoes.title}</h4>
          <p>{shoes.content}&{shoes.price}</p>
          <p>남은 개수: {재고[i]}</p>
        </div>)
}
export default App;


/*
    post요청: ex) axios.post('서버 URL',{id:'apple',pw:1234})
    context :변수context = React.createContext();
 */
/* 
오브젝트 자료형을 응용한 enum
:::
var 탭UI = { 
  info : <p>상품정보</p>,
  shipping : <p>배송관련</p>,
  refund : <p>환불약관</p>
}

function Component() {
  var 현재상태 = 'info';
  return (
    <div>
      {
        탭UI[현재상태]
      }
    </div>
  )
}  */