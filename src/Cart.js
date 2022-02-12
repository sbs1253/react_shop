import React,{useEffect, memo} from 'react';
import { Table } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';

function Cart(props){
  let state = useSelector((state)=>state.reducer)
  let dispatch = useDispatch();
  return (
    <div>  
    <Table responsive="sm">
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {state.map((a,i)=>{
        return(
        <tr key={i}>
          <td>{a.id}</td>
          <td>{a.name}</td>
          <td>{a.quan}</td>
          <td><button onClick={()=>{dispatch({type:"수량증가", 데이터 : a.id})}}>+</button><button onClick={()=>{dispatch({type:"수량감소", 데이터 :a.id})}}>-</button></td>
        </tr>
          )
        })}
    </Table>
    {props.alert열렸니 === true?
    <div className='my-alert2'> 
      <p>지금 구매하시면 신규할인 20%</p>
      <button onClick={()=>{props.dispatch({type:"닫기"})}}>닫기</button>
    </div>:
    null
    }
    <Parent 이름="존박" 나이="20"/>
    </div>
  )
}
/* function 함수명(state){
  return {
    state : state.reducer,
    alert열렸니 : state.reducer2
  }
}
export default connect(함수명)(Cart) */
export default Cart

function Parent(props){
  return (
    <div>
      <Child1/>
      <Child2/> 
    </div>
  )
}
function Child1(){
  useEffect( ()=>{ console.log('렌더링됨1') } );
  return <div>1111</div>
}
let Child2= memo(function(){
  useEffect( ()=>{ console.log('렌더링됨2') } );
  return <div>2222</div>
})
// Redux 는 골라쓰는 것이므로 다른곳에서 안쓰는것은 useState 가 더 좋은 관습
// dispatch => 액션객체
// memo 는 컴포넌트가 클때 사용 추천(불필요한 재렌더링 막는기능)