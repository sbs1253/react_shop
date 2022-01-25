import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components"


let Box =styled.div`
padding:20px;
` ;
let 제목 = styled.h4`
  font-size: 25px;
  color :${props=>props.색상};
`

export default function Detail({shoes}){
  let history = useHistory()
  let {id} = useParams();

  let 찾은상품 = shoes.find(x=>x.id==id);
  return(
        <div className="container">
          <Box><제목 색상="red">Detail</제목></Box>
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