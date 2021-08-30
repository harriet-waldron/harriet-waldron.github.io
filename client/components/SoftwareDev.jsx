{/* Links to deployed projects, 
links to github projects with 
screenshots ,
pics and description of projects in progress.
TO DO create drop down - blog, eda projects, personal projects 
move blog links into a drop down 
Talk about Friday projects and final project but link to game, link to art page */}


import React from 'react'
import { Route, Link } from 'react-router-dom'

import DevBlog from './DevBlog'

function SoftwareDev () {
 
  return (
    <>
    <div className='background' style={{ 
      backgroundImage: `url(${'/images/devimage.png'})`
      }}>

    <div className='spacer'>
    </div> 

    <div className='header'>
      <h1>Learning Journey</h1>
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
        <Link to='/blog'>Foundations Blog</Link>
      </div>
      <div>
        <p>Projects</p>
      </div>
      <Link to='/magic-gif'>First friday project</Link> 
      <Link to='/minesweeper'>First real JS project, minesweeper</Link>
    </div>


    <div className='spacer'>
    </div>
    <div className='spacer'>
    </div> 
    

    </div>
    </>
  )
}

export default SoftwareDev
