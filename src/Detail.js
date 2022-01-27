/*eslint-disable */

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components"
import "./Detail.scss"

let Box =styled.div`
padding:20px;
` ;
let 제목 = styled.h4`
  font-size: 30px;
  color :${props=>props.색상};
`

export default function Detail({shoes}){
  let history = useHistory()
  let {id} = useParams();
  const [show,setShow] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{setShow(false)},2000)
    return ()=>{console.log("Hello")}
  },[])
  let 찾은상품 = shoes.find(x=>x.id==id);
  return(
        <div className="container">
          <Box><제목 색상="black">Detail</제목></Box>
          {show===true?<div className='my-alert'>
            <p>재고가 얼마 남지 않았습니다</p>
          </div>:null}
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt='shoes'/>
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
              <p>{찾은상품.price}</p>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
            </div>
          </div>
        </div>  
  )
}

// history.push("이동할 링크")