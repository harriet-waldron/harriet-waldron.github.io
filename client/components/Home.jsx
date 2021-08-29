import React from 'react'
import { Route } from 'react-router-dom'

import About from './About'
import Contact from './Contact'

function Home () {
 
  return (
    <>
    <div className='background' style={{ 
  backgroundImage: `url(${'/images/homeimage.png'})`
}}>
    <div className='spacer'>
      </div> 
      
      <div className='header'>
        <h1>Blog Under Construction</h1>
      </div> 

      <About />

      <div className='spacer-small'>
      </div> 
      

      <Contact />

    
    </div> 
    </>
  )
}

export default Home
