import React from 'react'
import { withRouter } from 'react-router-dom'
import WithRouter from './WithRouter'

const data = {
  DevJYJ : {
    name : '장영진',
    des : 'React very Junior dev'
  },
  Gildong : {
    name : '홍길동',
    des : `DevJYJ's suppoter`,
  },
}

const Profile = ({match}) => {
  console.log(match)
  const {username} = match.params;
  const profile = data[username]

  if(!profile) {
    return <div>Un-Registerd User</div>
  }
  return (
    <>
      <h3>{username} ({profile.name})</h3>
      <p>{profile.des}</p>

      <WithRouter />
    </>
  )
}

export default Profile