import React from 'react'
import {Link, Route} from 'react-router-dom'
import Profile from './Profile'

const Profiles = () => {
  return(
    <div>
      <h3>User List</h3>
      <Link to="/profiles/DevJYJ"><p>DevJYJ profile</p></Link>
      <Link to="/profiles/Gildong"><p>Gildong profile</p></Link>

      <Route path="/profiles" exact render={() => <div>사용자 선택해주세요.</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  )
}

export default Profiles