import React, {useEffect, useState} from 'react'

const Info = () => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");

  useEffect(() => {
    console.log('rendering done.');
  }, [name]); //두번째 인자로 배열을 넣고, 그안에 state를 넣으면 해당 state가 변할 때 useEffect 실행.(update->re-render->useEffect)
  //두번쨰 인자 배열을 공란으로 둘 경우, 마운트 될 때만 실행됨.

  const onKeyUpName = e => {
    e.keyCode === 13 && setName(e.target.value)
  }
  const onKeyUpNick = e => {
    e.keyCode === 13 && setNick(e.target.value)
  }

  return (
    <>
      <div>
        <input placeholder="input Name : " onKeyUp={onKeyUpName}></input>
        <input placeholder="input Nickname : " onKeyUp={onKeyUpNick}></input>
      </div>
      <div>
        <p>이름 : {name}</p>
        <p>닉네임 : {nick}</p>
      </div>
    </>
  )
}

export default Info