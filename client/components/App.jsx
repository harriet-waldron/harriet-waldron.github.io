import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
// import About from './About'
// import Contact from './Contact'
import SoftwareDev from './SoftwareDev'
import Art from './Art'
import Games from './Games'
import DevBlog from './DevBlog'

import BlogPos from '../../blog/BlogPos'
import BlogID from '../../blog/BlogID'
import BlogLearn from '../../blog/BlogLearn'
import BlogEQ from '../../blog/BlogEQ'
import BlogDOM from '../../blog/BlogDOM'
import BlogNeuro from '../../blog/BlogNeuro'
import BlogSolve from '../../blog/BlogSolve'
import BlogRefl from '../../blog/BlogRefl'

function App () {
  return (
    <>
      <div className='app'>
        <Nav />

        <Route exact path='/' component={Home} />
        <Route exact path='/art' component={Art} />
        <Route exact path='/games' component={Games} />
        <Route exact path='/software' component={SoftwareDev} />
        <Route exact path='/blog' component={DevBlog} />

        <Route exact path='/positioning' component={BlogPos} />
        <Route exact path='/identity' component={BlogID} />
        <Route exact path='/learning' component={BlogLearn} />
        <Route exact path='/eq' component={BlogEQ} />
        <Route exact path='/dom' component={BlogDOM} />
        <Route exact path='/neuroplastic' component={BlogNeuro} />
        <Route exact path='/solve' component={BlogSolve} />
        <Route exact path='/reflections' component={BlogRefl} />

        <Route path='/magic-gif' component={() => { 
          window.location.href = 'https://magic-gif-8ball.herokuapp.com/'; 
          return null;
        }}/>
        <Route path='/minesweeper' component={() => { 
          window.location.href = 'https://harriet-waldron.github.io/minesweeper/'; 
          return null;
        }}/>

      </div>
    </>
  )
}

export default App
