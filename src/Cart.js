import React from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
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


// Redux 는 골라쓰는 것이므로 다른곳에서 안쓰는것은 useState 가 더 좋은 관습
// dispatch => 액션객체