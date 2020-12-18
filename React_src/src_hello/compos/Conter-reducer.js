import React, {useReducer} from 'react'

function reducer(state, action) {
  console.log(state)
  return { //새로운 status를 리턴, 단, 기존 스테이트를 직접 수정할 수는 없음. 밑과 같이 하거나, 새로운 변수를 선언하고 값을 받아온 후 리턴해야(불변성 보존 필수)
    ...state, //기존 state 가져옴.
    [action.name] : action.value //기존상태에서 + 바뀐상태를 업데이트
    /*위의 코드에서 
    원래 상태 : 
    {name : 'jyj', nick: 'test'}

    dispatch (nick 만 수정된다면) 이후
    {name='jyj', nick : 'something'}    
    
    만약. ...state 가 없다면 기존 state를 잃기 떄문에
    dispatch (nick 만 수정된다면) 이후
    {name='', nick : 'something'} 
    */
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    name : '',
    nick : ''  //state 지정
  })

  const {name, nick} = state; //비구조화 할당

  const update = e => {
    e.keyCode === 13 && dispatch(e.target) //1. dispatch에게 이벤트가 일어난 element 자체를 넘김
  }

  return(
    <>
      <h2>{name} : </h2> <h2>{nick}</h2>
      <input name="name" onKeyUp={update}></input>
      <input name="nick" onKeyUp={update}></input>
    </>
  )
}

export default Counter;