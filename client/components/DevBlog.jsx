import React from 'react'
import { Route } from 'react-router-dom'


function DevBlog () {

    return (
        <>
        <div className="reflections">
            <div className="post"><a href="position.html">Learn: What are the differences between relative, absolute, and fixed positioning?</a></div>
            <div className="post"><a href="identity.html">Who am I? An exploration of identity.</a></div>
            <div className="post"><a href="learning.html">Dev Academy: Learning plan.</a></div>
            <div className="post"><a href="emotional-intelligence.html">Emotional Intelligence; what does it feel like?</a></div>
            <div className="post"><a href="javascript-dom.html">Javascript and the DOM; basic functionality.</a> </div>
            <div className="post"><a href="neuroplasticity.html">Neuroplasticity; the difference between Fixed and Growth mindsets.</a></div>
            <div className="post"><a href="problem-solve.html">Problem solving: What to do when things feel stuck.</a></div> 
            <div className="post"><a href="foundations-reflections.html">Foundations: Reflecting on the learning journey.</a></div>
        </div> 
        </>
    )
    }
    
    export default DevBlog
    