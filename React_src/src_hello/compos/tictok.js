import React, {useState, useEffect} from 'react'

const TicTok = () => {
  
  const [time,setTime] = useState(new Date().toString());

  useEffect(()=>setInterval(()=>{setTime(new Date().toString())},1000))

  return (
    <>
      <p>{time}</p>
    </>
  )
}

export default TicTok