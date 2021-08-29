import React from 'react'


function About () {
 
  return (
      <div className='text-block__flex' >
        <div className='side-block_small' >
        {/* my images aren't working, may need api call -- returns GET 404 error */}
        <img src="/images/kimchi.png" className='profile-img'/>
        </div>
        <div className='side-block_large' >
          <p> 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
  )
}

export default About
