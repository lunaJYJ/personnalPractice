import React from 'react'
import {withRouter} from 'react-router-dom'

const WithRouter = ({location, history, match}) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={8}
        readOnly={true} />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={8}
        readOnly={true} />
    </div>
  )
}

export default withRouter(WithRouter)
//자신을 랜더링하는 컴포넌트의 location, history, match 객체를 사용함.