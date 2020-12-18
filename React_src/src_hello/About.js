import React from 'react';
import qs from 'qs'

const About = ({location}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true //쿼리 맨 앞 ? 생략
  })

  const showDetrail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>This project for learn basic of react router  moudle</p>
      <p>
        {showDetrail ? 'detail 값을 true로 설정함.' : 'detail 값을 false로 설정'}
      </p>
    </div>
  )
}

export default About