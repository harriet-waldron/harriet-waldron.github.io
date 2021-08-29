import React from 'react'
import { Route } from 'react-router-dom'

// import Header from './Header'

function Games () {
 
  return (
    <>
    <div className='background' style={{ 
      backgroundImage: `url(${'/gameimage.png'})`
      }}>

    <div className='spacer'>
    </div> 

    <div className='header'>
      <h1>Game Journey</h1>
    </div>

    {/* <div className='spacer-small'>
    </div> */}

    <div className='text-block'>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
    </div>

    <div className='text-block__flex'>
      <div>
        <p>Projects</p>
      </div>
    </div>

    <div className='spacer'>
    </div>
    <div className='spacer'>
    </div> 
    <div className='spacer'>
    </div> 
    <div className='spacer'>
    </div> 
    <div className='spacer'>
    </div> 

    </div>
    </>
  )
}

export default Games
