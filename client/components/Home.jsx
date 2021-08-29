import React from 'react'
import { Route } from 'react-router-dom'

import About from './About'
import Contact from './Contact'

function Home () {
 
  return (
    <>
    <div id='testBackground' style={{ 
  backgroundImage: `url(${'/image.png'})`
}}>
    <div className='spacer'>
      </div> 
      
      <div className='home_header'>
        <h1>Blog Under Construction</h1>
      </div> 
      <div className='spacer'>
      </div>  

      <About />

      <div className='spacer'>
      </div> 

      <Contact />

      <div className='spacer'>
      </div> 
    
    </div> 
    </>
  )
}

export default Home
