import React from 'react'
import { Route } from 'react-router-dom'

// sections for comissioned art, eda project, personal projects. In drop down format with 
// a cover image for each project
// also add small descriptions

function Nav () {
 
  return (
    <>
    <div className='background' style={{ 
      backgroundImage: `url(${'/images/artimage.png'})`
      }}>

    <div className='spacer'>
    </div> 

    <div className='header'>
      <h1>Art Journey</h1>
    </div>

    {/* <div className='spacer-small'>
    </div> */}

    <div className='text-block'>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
    </div>

    <div className='spacer-small'>
    </div>

    <div className='text-block__flex'>
      <div>
        <p>Projects</p>
      </div>
    </div>

    <div className='spacer-small'>
    </div> 

    <div className='text-block__flex'>
        <img src="/projects/creaturesketch.png" className='project-img' />
      </div>

      <div className='text-block__flex'>
        <img src="/projects/retrosketch.png" className='project-img' />
        <img src="/projects/retroshirt.png" className='project-img' />
      </div>
      <div className='text-block__flex'>
        <img src="/projects/retropeople.PNG" className='project-img' />
        <img src="/projects/retrosticker.PNG" className='project-img' />
      </div>  

    <div className='text-block__flex'>
      <img src="/projects/startscreen.png" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/sunlevel.PNG" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/dragonlevel.PNG" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/eyelevel.PNG" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/endscreen.png" className='project-img' />
    </div>

    <div className='text-block__flex'>
      <img src="/projects/Bean2Pot.png" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/Bean2Ball.png" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/Bean2Leaf.png" className='project-img' />
    </div>

    <div className='text-block__flex'>
      <img src="/projects/JumpBean.png" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/RunBeanLeft.png" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/RunBeanRight.png" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/Pot2Leaf.png" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/Leaf2Ball.png" className='project-img' />
    </div>
    <div className='text-block__flex'>
      <img src="/projects/Ball2Pot.png" className='project-img' />
    </div>

    <div className='text-block__flex'>
      <img src="/projects/menufront.PNG" className='project-img' />
      <img src="/projects/menuback.PNG" className='project-img' />
      </div>

      <div className='text-block__flex'>
        <img src="/projects/sprayclose.png" className='project-img' />
        <img src="/projects/sprayfar.png" className='project-img' />
        <img src="/projects/mothspray.png" className='project-img' />
      </div>

      <div className='text-block__flex'>
        <img src="/projects/poemart.png" className='project-img' />
        <img src="/projects/poemart1.png" className='project-img' />
        <img src="/projects/poemartsketch.png" className='project-img' />
      </div>

      <div className='text-block__flex'>
        <img src="/projects/threeartsketch.png" className='project-img' />
        <img src="/projects/sketch.PNG" className='project-img' />
      </div>
      <div className='text-block__flex'>
        <img src="/projects/sketch2.PNG" className='project-img' />
        <img src="/projects/handsketch.png" className='project-img' />
      </div>

      <div className='text-block__flex'>
        <img src="/projects/sunmoontree.png" className='project-img' />
        <img src="/projects/suntreeschedule.png" className='project-img' />
      </div>


    
    <div className='spacer'>
    </div> 

    </div>
    </>
  )
}

export default Nav
