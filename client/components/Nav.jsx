import React from 'react'
import { Route } from 'react-router-dom'

// import Header from './Header'


function Nav () {
 
  return (
    <>
      <div className='navigation'>
        <div class="reflections">
            <div class="post"><a href="position.html">Learn: What are the differences between relative, absolute, and fixed positioning?</a></div>
            <div class="post"><a href="identity.html">Who am I? An exploration of identity.</a></div>
            <div class="post"><a href="learning.html">Dev Academy: Learning plan.</a></div>
            <div class="post"><a href="emotional-intelligence.html">Emotional Intelligence; what does it feel like?</a></div>
            <div class="post"><a href="javascript-dom.html">Javascript and the DOM; basic functionality.</a> </div>
            <div class="post"><a href="neuroplasticity.html">Neuroplasticity; the difference between Fixed and Growth mindsets.</a></div>
            <div class="post"><a href="problem-solve.html">Problem solving: What to do when things feel stuck.</a></div> 
            <div class="post"><a href="foundations-reflections.html">Foundations: Reflecting on the learning journey.</a></div>
        </div> 
      </div>
    </>
  )
}

export default Nav
