import React from 'react'
import { Link } from 'react-router-dom'

function BlogDOM () {
 // this one needs a bit of syntax work 
  return (
    <>
      <div className='text-block'>
        
        <header>
          <h1 className="post-title">JavaScript Basics</h1>
          <h3> and understanding the Document Object Model</h3>
        </header>
        <section className="post-article"> 
          <p>
            Welcome to my technical blog post for sprint three, foundations. <br></br> In this article, I'll attempt to: </p>
          <ul>
            <li>Use an analogy to describe the differences between HTML, JavaScript and CSS</li>
            <br></br>
            <li>Explain control flow and loops using an example process from everyday life</li>
            <br></br>
            <li>Describe what the DOM is and an example of how you might interact with it</li>
            <br></br>
            <li>Explain what functions are and why they are useful</li>
            <br></br>
            <li>Explain the difference between accessing data from arrays and objects</li>
          </ul>
            <h4> Let's begin! </h4><br></br>

          <h4>HTML, JavaScript and CSS</h4>
          I like to think of HTML, JS and CSS as enthusiastic builders. They all fill different roles, and rely on each other 
          to get the house feeling strong, looking beautiful and enjoyable to be inside. When they're feeling on form, they work 
          super well together. <br></br>  
          HTML is a no nonsense, reliable type. They like to lay foundations that won't shake, and are interested in the bones 
          of the structure. There are certain things that HTML will decide, like the names of the rooms, and the content 
          inside them. As long as all the pieces are there, the foundations are laid, and all the doors connect to other rooms, 
          HTML is happy. <br></br>
          Next they look to CSS. CSS is a designer, they like to decide where the rooms will go, and what layout the house has. 
          As they have heaps of energy and want the house to look beautiful, they also decide everything from paint color to curtains. 
          HTML and CSS work well with each other and are happy to listen to each other's needs (they know that when they 
          don't, the house become chaotic really quickly). <br></br>
          Next JavaScript comes in. JS likes to design houses that are functional, and can get really creative and high 
          tech with it. Do you want the curtains to open 5 minutes ater your alarm goes off? Do you want your room to change color 
          every time you step on a certain rug? Would you like the fridge to randomly decide for you what you're eating today? 
          JavaScript is the the builder for you. They make a house functional and interactive in whichever way you like, from 
          important tasks and alerts (like a fire alarm) to a more gamified experience. <br></br>

          <h4>Control flow and loops</h4>
          Controlling the flow of a document means getting to decide the order in which your code runs. Normally a document 
          would run from top to bottom, but along the way there may be certain information that is needed to continue on. If 
          the input requirements aren't met, you wouldn't want the code to continue as nothing happened, and so you need to 
          redirect the flow of the document. Think of it like a busy bank with a queue control manager. To get to any of the 
          tellers you need to get through the manager. You tell them what you need and based off this information they direct 
          you to a certain queue. If you just walked on by this person, you'd both have a difficult time. <br></br>
          Loops are one way of controlling the flow of a document. They are statements that will continue so long as a condition 
          is true. An easy example is brushing your hair. Once started, you will continue to brush your hair so long as there 
          are still knots. As soon as there are no longer knots, you will stop brushing your hair. A loop is a good way to perform 
          large repetitive tasks, or cycling through data to find information that matches a condition. <br></br>
          
          <h4>Interacting with the DOM</h4>
          The DOM, or the Document Object Model, represents your entire project, starting with the window and branching down 
          to the smallest elements. It looks similar to a geneology chart, and uses terms like parent and child to describe 
          relationships between elements. Parent elements directly encase the child elements, so html would be the parent of 
          head and body, and the child of document, and so on. Window is always the greatest ancestor. <br></br> 
          It is through the DOM and the .document key that JavaScript can access the elements it wants to manipulate in HTML 
          and CSS. <br></br>
              For example, If I wanted to change the color of a button everytime it was clicked, I would need to start by accessing the 
          {/* button's HTML id selector using <strong> document.getElementById('colorButton')</strong>. <br></br> Once I have access to the button, I then append an  */}
          event listener, which would look for a certain action to know when to run. Looking out for a click or a key pressed on 
          the keyboard would be a common example. My code now looks like this; <br></br>
          <strong> document.getElementById('button').addEventListener('click')</strong>. <br></br> So I have access to the button, and the event listener 
          is making sure that it pays attention when a user clicks this button. But now we need to make sure something happens 
          when the button is clicked. I'm going to add a function called changeColor, and then expand more on this example and how the function 
          works in the section below. <br></br>
          <strong> document.getElementById('button1').addEventListener('click', changeColor);</strong> <br></br>
          This line of code is using the DOM to allow me access to my html button element, through it's id 'button1'. The event 
          listener then waits for a user to 'click' this element, and on doing so executes the function changeColor. <br></br>
          While this can be done all in one line, I prefer to save the value of the element I accessed using .getElementById, in its own 
          variable, and then using the variable to prepend the event listener. This is demonstrated in the image below. 

          <h4>Functions</h4>
          Functions are reusable blocks of code that allow you to create functionality and interactivity.
          Functions allow for parameters, which are placeholders for the information they will be given later on. For 
          example, if I wanted to have a simple function that would add two numbers together, it would look like this; <br></br> <strong>
          {/* 'function add(a, b) <br></br>
          console.log(a + b); <br></br>
          )) <br></br> */}
          add(2, 6); <br></br> </strong>
          8 would be logged to the console. Here a and b are the parameters, which indicate that two pieces of information are 
          expected. When I call the function at the end, 2 and 6 represent a and b. The data given at the end (2, 6), are known 
          as arguments. Functions can also be given as arguments for other functions to work. <br></br>
          Lets go back to the button colour change example from before, I'll write it out then explain what its doing. <br></br><br></br>
          
          <img src="/images/colorchange.PNG" alt="Shows the code to create a random color change button."></img>
          <div><button id="colorButton">Click me!</button></div>
          
          First of all I gained access to the button by its id, and saved it to the variable change. <br></br>
          I then needed to create a function that would randomly select a color value. I did this in two parts, first I used 
          Math.random and Math.floor to select a whole number between 0 and 256, to represent the rgb numeric colors. <br></br>
          In my next function I created a string of three color values, to create one whole rgb value, and saved it to the 
          randomColor variable. This function was created as an <a href="https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers">
          event handler</a> which signals a change in the browser in response to an event. Outside of the functions I created 
          an event listen, as explained in the previous section, appended to the variable that holds my button id. I told the 
          listener to respond to a click, and to take the changeColor function as an argument. <br></br>
          Click the button on the right to see the results! <br></br> <br></br>
      
          <h4>Accessing Arrays vs Objects</h4>
          Both arrays and objects are used to store data and are mutable. Where do the differences lie? <br></br>
          Objects are used more often to represent something that can be defined by characteristics (like a person, a car, 
          a cd). Objects contain sets of key value pairs , like (name : 'josie'). Objects can also contain arrays, like (pets : [parakeet, meerkat, 
          donkey]). <br></br>
          To access an object, you can use either dot or bracket notation. Here's how it looks. <br></br> <br></br>
          {/* <strong>'let girlfriend = {}')) <br></br> */}
          name : 'josie', <br></br>
          {/* pets : [parakeet, meerkat, donkey]; <br></br>
          )) <br></br> <br></br> */}
          {/* girlfriend.name // returns 'josie' <br></br>
          girlfriend[pets] // returns [parakeet, meerkat, 
          donkey] <br></br> <br></br>
          </strong> */}
          Arrays are used to create lists of data, especially helpful in an ordered list when you want to access an item by it's index 
          number. <br></br>
          To access an item in an array, always use bracket notation and the index number. Items in an array start counting from 
          0, so to access the first item it will look like array[0]. Lets use the pets array from above, ignoring that it's in an object 
          right now. <br></br> <br></br>
          <strong>pets[1] // returns meerkat. <br></br> pets [2] // returns donkey.</strong> <br></br>
          If you wanted to access a specific array item within the object, it would look like this: <br></br>
          <strong>
          girlfriend.pets[0];  // returns parakeet <br></br>    
          </strong> <br></br>
          There are several differences in how objects and arrays can be altered too. Objects use dot notation to add, remove 
          and change the key value pairs, in the form object.key. Here are a couple examples. <br></br>
          <strong>
          girlfriend.name = 'freya' // changes name <br></br>
          girlfriend.isCool = true  // adds new key value pair <br></br>
          delete girfriend.pets     // deletes pets array <br></br>
          </strong> <br></br>
          If you want to alter an array, there are several different methods you can call. <br></br>
          <strong>
          pets.push('brown bear');  // Adds items to the end of an array <br></br>
          pets.pop();    // Takes item off the end of an array    <br></br>
          pets.shift('snake', 'venus flytrap');  // adds items to the beginning <br></br>
          pets.unshift();    // Removes from beginning. <br></br> <br></br> <br></br> <br></br>
          </strong>

      <h4>Thank you for taking the time to read this post, did you learn anything?</h4>
    
      </section>
        
      <footer>
        <h2> Would you like to <Link to='blog'>read more?</Link></h2>
      </footer>
      </div>
    </>
  )

}

export default BlogDOM
