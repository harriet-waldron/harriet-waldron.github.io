import React from 'react'
import { Link } from 'react-router-dom'


function DevBlog () {

    return (
        <>
        <div className='spacer'>
        </div> 

        <div className='header'>
            <h1>Foundations Blog</h1>
        </div>

        <div className='text-block__flex'>
            <div className='side-block_small'>
                <Link to="positioning">Learn: What are the differences between relative, absolute, and fixed positioning?</Link>
            </div>
            <div className='side-block_small'>
                <Link to="identity">Who am I? An exploration of identity.</Link>
            </div>
            <div className='side-block_small'>
                <Link to="learning">Dev Academy: Learning plan.</Link>
            </div>
        </div> 
        <div className='text-block__flex'>
            <div className='side-block_small'>
                <Link to="eq">Emotional Intelligence; what does it feel like?</Link>
            </div>
            <div className='side-block_small'>
                <Link to="dom">Javascript and the DOM; basic functionality.</Link> 
            </div>
            <div className='side-block_small'>
                <Link to="neuroplastic">Neuroplasticity; the difference between Fixed and Growth mindsets.</Link>
            </div>
        </div>
        <div className='text-block__flex'>
            <div className='side-block_small'>
                <Link to="solve">Problem solving: What to do when things feel stuck.</Link>
            </div> 
            <div className='side-block_small'>
                <Link to="reflections">Foundations: Reflecting on the learning journey.</Link>
            </div>
        </div>
        </>
    )
    }
    
    export default DevBlog
    