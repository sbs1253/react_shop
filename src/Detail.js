/*eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components"
import "./Detail.scss"
import { Nav } from 'react-bootstrap';
import {CSSTransition} from "react-transition-group"
import { connect, useSelector,useDispatch } from 'react-redux';

let Box =styled.div`
padding:20px;
` ;
let 제목 = styled.h4`
  font-size: 30px;
  color :${props=>props.색상};
`
function Detail({shoes,재고}){
  let history = useHistory()
  let {id} = useParams();
  const [show,setShow] = useState(true)
  const [누른탭, 누른탭변경]  = useState(0)
  const [스위치, 스위치변경]  = useState(false)

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{setShow(false)},2000)
    return ()=>{clearTimeout(타이머)}
  },[])
  let 찾은상품 = shoes.find(x=>x.id==id);

  let state = useSelector((state)=>state.reducer)
  let dispatch = useDispatch();

  useEffect(()=>{
      var arr = localStorage.getItem('watched')
      if(arr===null){
        arr=[]
      }else{
        arr = JSON.parse(arr)
      }

      arr.push(id)
      arr =new Set(arr)
      arr =[...arr]

      localStorage.setItem('watched', JSON.stringify(arr))
  },[]);

  return(
        <div className="container">
          <Box><제목 색상="black">Detail</제목></Box>
          {show===true?<div className='my-alert'>
            <p>재고가 얼마 남지 않았습니다</p>
          </div>:null}
          <div className="row">
            <div className="col-md-6">
              <img src={`https://codingapple1.github.io/shop/shoes${+(id)+1}.jpg`} width="100%" alt='shoes'/>
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
              <p>{찾은상품.price}</p>
              <Info 재고={재고[id]}/>
              <button className="btn btn-danger" onClick={()=>{dispatch({type : '항목추가', 데이터 : {id : 찾은상품.id, name : 찾은상품.title, quan : 1} }) 
              history.push('/cart'); 
              }}>주문하기</button> 
              <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
            </div>
          </div>
      <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false);누른탭변경(0)}}>상품설명</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false);누른탭변경(1)}}>배송정보</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={500}>
      <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
        </div>  
  )
}
function TabContent({누른탭, 스위치변경}){

  useEffect(()=>{
    스위치변경(true);
  })
  
  if (누른탭===0){
    return <div>0번째 내용</div>
  }else if (누른탭===1){
    return <div>1번째 내용</div>
  }else
    return <div>아무내용</div>
}

function Info({재고}){
  return(
    <p>재고: {재고}</p>
  )
}

export default Detail
// history.push("이동할 링크") : 헤더 작성도 가능
// props 구조분해 하면 dispatch