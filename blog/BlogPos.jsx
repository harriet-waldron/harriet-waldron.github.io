import React from 'react'
import { Link } from 'react-router-dom'

function BlogPos () {
 
  return (
    <>
      <div className='text-block'>
      
      <header>
           <h1 class="post-title">Positioning elements</h1>
           <h3>What is the difference between relative, absolute and fixed positioning?</h3>
         </header>
         <section class="post-article"> <p>
           Positioning elements so your web page looks how you want it to is a key aspect of design. It sounds like it should 
           be simple, just tell the elements where to go, right? <br></br> Well yes.. but it is a little more complicated than that.
           There are several methods to achieving satisfying element layout in CSS, main ones include the keys display, float and 
           positioning. The latter is the one we'll focus on today.
             <br></br>
           <h4>So what can this little key do? What are the options?</h4>  
           Here are the main four: <br></br><br></br>
            position: static;<br></br>
            position: relative;<br></br>
            position: absolute;<br></br>
            position: fixed;<br></br>
            <br></br>
            <h4>position: static;</h4>
            Static is the default, you don't need to specify this in a ruleset as it is assumed, unless
            you wanted to override an inherited rule - inherited meaning your element has been given orders
            by another ruleset. This display means that all the elements are positioned in the 
            order they appear in your html. It also means that this element won't move out of place, even 
            if you supply additional instructions. <br></br>

            <h4>Let me show you.</h4> <br></br>
            First the setup for the html and css: <br></br>
            <div class="screenshots">
              <img src="../Resources/positioning_parent_html1.JPG" alt="Image showing the basic HTML code for a parent container and two 
              child elements, which are labled as a green circle, and a red circle."></img>
              <p><em>fig.1</em> HTML setup</p>
            
              <img src="../Resources/setup_outcome.PNG" ></img>
              <p><em>fig.2</em> CSS set up and outcome. Though the display key has not been written, static positioning is implied.</p>
              
            </div>
            <br></br>
            <h4>position: relative;</h4>
            Relative appears exactly the same at first. This is because the element is positioned relative to it's usual
            place within the container, so it is still where you would expect it to be. The difference is that now you can add 
            additional instructions, known as offset properties, telling it to go more to the left, right, top or 
            bottom of its original position. Relative elements also won't affect the positioning of anything else, as they 
            are still within the document flow, but they can overlap other elements. Being still in the document flow means 
            that the element will move out of its place and leave a gap behind, ensuring all other elements stay where they are. (Like 
            removing a book from a horizontal shelf).
            <br></br>
            <div class="screenshots">

            <img src="../Resources/static_position_relative_box.PNG" alt=""></img>
            <p><em>fig.3</em> As you can see, the container has moved, but both static and relative elements remained in the same position 
              within the parent.</p>
          
  
            <img src="../Resources/relative_moved.PNG" alt=""></img>
            <p><em>fig.4</em> Once you apply offset instructions, you can see how the relative positioning takes effect.</p>
          
            </div>
            <br></br>
            <h4>position: absolute;</h4>
            Absolute elements are positioned in relation to the closest parent element. Parent
            elements refer to the ones that encase the element you're trying to move (see fig.1). The parent element that 
            an absolute positions itself according to can be either relative or absolute, but 
            if there is no positioned parent, the element you are moving will position itself in relation to the html document itself,
            which can be harder to maintain the more complex your code gets. Absolute positioning does have an effect on 
            the positioning of other elements, as it has been removed from the flow of the document.
            Being removed from the document flow means that other elements will move to fill the empty space,
            like taking a book out of a vertical stack. 
            <br></br>
            <div class="screenshots">

                <img src="../Resources/position_ absolute_over.PNG" alt=""></img>
                <p><em>fig.5</em> The green circle element has been removed from the document flow, 
                so the red circle element can no longer 'see' it and has taken its place.</p>
              
            
                <img src="../Resources/position_ absolute_over2.PNG" alt=""></img>
                <p><em>fig.6</em> It hasn't disappeared though, moving it to the left by 75px reveals the green circle element, 
                    while the red circle stays in place.</p>
                
            </div>
            <br></br>
            <h4>How do relative and absolute interact?</h4>
            Absolute and relative positioning work together pretty nicely. If you want 
            to use absolute positioning and don't want potential chaos, house them inside of a 
            relatively positioned parent container. There is still freedom of movement and the
            elements can overlap others inside the same container, but they won't go 
            out of the walls of their parent container.   
            <br></br>
            <div class="screenshots">

                <img src="../Resources/absolute_static.PNG" alt=""></img>
                <p><em>fig.7</em> Here the green circle is positioned absolutely, the red is positioned relatively, 
                  and the parent container is static.</p>
            </div>  
            <br></br>
            <h4>position: fixed;</h4> 
            
            Fixed positioning is the final one we will look at. With a position of fixed, the element sits in relation to the 
            browser window. Here it is also removed from the document flow, but is fixed in place and will still be visible when you
            scroll. This works well for a navigation menu, like the one on this page for example. Notice how it is always 
            in sight? That helps make sure you'll never get lost. Fixed elements will obscure whatever is behind it, so it 
            is important to make them not too large or to use on a page where the user doesn't need to scroll.
            </p>
        
        <h4>Thank you for taking the time to read this post</h4>
      
        </section>

        <footer>
          <h2> Would you like to <Link to="blog">read more?</Link></h2>
        </footer>

      </div>
    </>
  )
}

export default BlogPos
