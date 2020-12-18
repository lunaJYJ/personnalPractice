import React, {useState, useCallback} from 'react'
import {Route} from 'react-router-dom'
import NewsPage from './pages/NewsPage'

const App = () => {
  return(
    <Route path="/:category?" component={NewsPage} />
    )
}

export default App

//3eb3d2f260f349f9ab6a94c78ec14baf