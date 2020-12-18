import React, {useMemo, useState, useCallback, useRef} from 'react'


const getAvg = (numbers) => {
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a+b);
  return sum/numbers.length
}


const AVG = () => {
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')
  /*
  useRef로 로컬 변수도 사용할 수 있는데,
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  }
  const printId = () => {
    console.log(id.current);
  }
  
  단, 이는 ref안의 값이 바뀌어도(여기서는 id) 리렌더링이 되지 않음.
  렌더링이랑 상관없는 값 관리시에만 이렇게 사용할 것.
  
  */

  const inputEl = useRef(null); //ref 선언

  const onChange = (e) => {
    setNumber(e.target.value)
  }

  const onInsert = useCallback(() => {
    setList([...list, parseInt(number)]);
    setNumber('')
    inputEl.current.focus(); //useRef로 ref를 설정하면, current 는 실제 엘리먼트를 가리킴.
  }, [number, list]) //useEffect 처럼 두 번째 인자 배열의 항목이 업데이트 될때만 실행함. 
  //useCallBack 함수는 다른 요소의 바뀜으로 리렌더링 될때마다 관련없는 함수가 새로 생기는 것을 방지, 재사용하게끔 한다. 
  // 위의 코드는 해당 함수를 첫 렌더링시에만 만들고, 이후 추적인자가 바뀔 때만 함수 재생성. 다른 요소의 바뀜으로 리렌더링 될때에는 함수를 만들지 않음.
  //

  const avg = useMemo(()=>getAvg(list), [list]) //첫 인자에 팩토리함수, 두번째 인자에 추적하기 원하는 값들의 배열
  //useEffect 처럼 두 번째 인자 배열의 항목이 업데이트 될때만 실행함

  return (
    <>
      <input value={number} onChange={onChange} ref={inputEl}></input> {/* ref setting. */}
      <button onClick={onInsert}>Submit</button>
      <ul>
        {list.map((value, index) => (<li key={index}>{value}</li>))}
      </ul>
      <p>{avg}</p>
    </>
  )
}

export default AVG;