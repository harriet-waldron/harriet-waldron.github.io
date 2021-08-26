import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
// import About from './About'
// import Contact from './Contact'
import SoftwareDev from './SoftwareDev'
import Art from './Art'
import Games from './Games'
import DevBlog from './DevBlog'

function App () {
  return (
    <>
      <div className='app'>
        <Nav />

        <Route exact path='/' component={Home} />
        <Route exact path='/art' component={Art} />
        <Route exact path='/games' component={Games} />
        <Route exact path='/software' component={SoftwareDev} />
        <Route exact path='/blog' component={DevBlog} />
      </div>
    </>
  )
}

export default App
