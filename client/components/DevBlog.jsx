import React from 'react'
import { Link } from 'react-router-dom'


function DevBlog () {

    return (
        <>
        <div >
            <div className='text-block'><Link to="positioning">Learn: What are the differences between relative, absolute, and fixed positioning?</Link></div>
            <div className='text-block'><Link to="identity">Who am I? An exploration of identity.</Link></div>
            <div className='text-block'><Link to="learning">Dev Academy: Learning plan.</Link></div>
            <div className='text-block'><Link to="eq">Emotional Intelligence; what does it feel like?</Link></div>
            <div className='text-block'><Link to="dom">Javascript and the DOM; basic functionality.</Link> </div>
            <div className='text-block'><Link to="neuroplastic">Neuroplasticity; the difference between Fixed and Growth mindsets.</Link></div>
            <div className='text-block'><Link to="solve">Problem solving: What to do when things feel stuck.</Link></div> 
            <div className='text-block'><Link to="reflections">Foundations: Reflecting on the learning journey.</Link></div>
        </div> 
        </>
    )
    }
    
    export default DevBlog
    