import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import SoftwareDev from './SoftwareDev'
import Art from './Art'
import Games from './Games'
import App from './App'


function Nav () {
 
  return (
    <>
      <div className='navigation'>
       
      <Link to='/'>Home</Link>
      <Link to='/software'>Software Engineer</Link>
      <Link to='/games'>Game Developer</Link>
      <Link to='/art'>Artist</Link>
      </div>
    </>
  )
}

export default Nav
