import React from 'react'
import { Route } from 'react-router-dom'

import About from './About'
import Contact from './Contact'

function Home () {
 
  return (
    <>
      <h1>Hi</h1>
      <About />
      <Contact />
    </>
  )
}

export default Home
