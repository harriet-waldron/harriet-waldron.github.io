import React from 'react'
import { Link } from 'react-router-dom'

function BlogRefl () {
 
  return (
    <>
      <div className='text-block'>
      
      <header>
         <h1 class="post-title">Reflections</h1>
         <h3>Looking back on the foundations learning journey</h3>
       </header>
       <section class="post-article"> 
          <p>
            I am reaching the final stages of foundations sprint 5. It has been a month of hard work, learning and growth, 
            and it seems that now is a perfect time for reflection. The following post will explore the learning received 
            through each of the core exercises from the last 4 sprints, in a question and answer format. To go deeper on 
            the subjects of identity, emotional intelligence, and neuroplasticity, read the posts with those titles nestled 
            quietly in the 'reflections' directory. Otherwise, read on. Here we go: <br></br>
           <h4> What are three new things you have learned about yourself and your ego as a result of the core 
           learning?</h4>
           <ol>
             <li>Fixed mindset. During the first two sprints I noticed a tendancy within myself toward a fixed mindset, 
               though I didn't know it as such. When we were first encouraged to share our work, I noticed a drive to 
               be both one of the first people outputting content, and for that content to be of a higher quality. I needed to 
               prove to myself and my peers that I was good enough to be here, and that my work was worthy of the time put 
               in. I saw this as an internal perfectionist/competitive drive that was only putting pressure on myself. 
               Since learning about a fixed vs growth mindset, I am able to recognise those drives as reacting in line with 
               a fixed mindset. I believed that I had to prove my intelligence and capability, instead of being comfortable 
               with the idea of being on a learning curve. The outcome did help me improve as I put more effort and time 
               in to upskilling, but it was at the cost of feeling stressed and pressured. <br></br>
             </li>
             <li>Habits. Delving in to the habits section in learning how to think like a programmer was really helpful. I used 
               to think of myself as a person who was lazy or unable to achieve the goals I set myself, but it turns out that what I 
               was lacking was an understanding of how to create good habits. I have discovered that I really like working 
               within a solid structure. Based on the last month of study, I have found working easy and enjoyable under the right 
               circumstances. I am able to focus easily for long periods of time, I am able to achieve my goals, and can create 
               healthy balance within myself. I am consistently motivated, productive and interested in the study. This has a lot 
               to do with the subject matter, the environment cultivated at EDA and the fact I have a lot of course work to get through, 
               but I feel held in that by the structure I have created and the habits I am building. My ideas about myself are 
               shifting as I create an environment in which I can show up for myself and for my goals. <br></br>
             </li>
             <li>
               Identity. The core material is definitely helping me come closer to understanding who I am, what I believe in 
               and who I am becoming. Undertaking intensive study is and will be shaping me in ways I haven't experienced 
               before and without the core learning, a lot of these changes might go unnoticed in myself. Just having awareness 
               of this means I can consciously cultivate the person I am becoming, or at least be awake for the ride. 
               I have discovered that I am incredibly interested in the core skills, and that will help shape the career path I 
               pursue in the future.
             </li>
           </ol>

           <h4>What are the role of values, empathy and self awareness in learning and programming?</h4>
             Well, whichever work you do will take up a significant portion of your life, so if values, empathy and self 
             awareness are integral parts of being an actualised human being.. that is inextricable from whichever work you do. 
             As programming and the method of learning at EDA are very human focused, it is important to bring your humanity 
             to the table. Strengthening all of these aspects in yourself will serve to make you a better leader, team worker, 
             learner, and create better work. Programming is about creating products that people will use, so it seems pretty 
             important to know how people work if you want to create a great product. 

           <h4>What has surprised you the most about the core learning?</h4>
             I have been surprised by the fact that programming is a really social thing. I had always thought of the tech 
             world in general as being populated by anti-social beings who preferred screens over people, and so I never 
             thought of programming as a pursuit that could interest me. That belief has shifted radically, but I keep 
             uncovering new layers of that idea, and so I keep being pleasantly surprised. The fact we study core learning 
             at all, the knowledge that this is what makes the best tech companies thrive, tools like pair programming and 
             meditation encorporated into the work day.. All of this is surprising and great. 

           <h4>What were the most challenging aspects of the core learning?</h4>
             The part I felt most challenged by, was in the first sprint where we had to write about identity, strengths and 
             values. I found it difficult to encapsulate my personality in a succinct way. I feel sometimes nebulous and 
             ever-changing, it is hard to identify the parts of myself that are integral from the parts of myself that are 
             environmental. It was a useful challenge to get to the core of what I believe in and find consistencies there, but 
             I also found it difficult to stay on track with the questions and not over elaborate, or add in extra information. 
             If others were to be reading my blog, how could I just offer them a snapshot of who I am and expect it to be 
             accurate? <br></br>

           <h4>Why do you think we, a programming school, are spending so much time focusing on core learning in a web 
           development bootcamp course?</h4>
             I do think the core learning is a vital aspect of understanding how to be at home with ourselves and others. Mostly 
             life involves dealing with other humans, and it always involves the need to know yourself. Learning about how to learn, 
             problem solving and how the brain works of course makes you more able to adapt and grow, and continue an evolving 
             learning journey outside of a school environment. With tech there is always more to learn, always more threads to 
             follow, so it makes perfect sense for a programming school to be preparing students for life outside a classroom. It 
             also will only benefit the wider community and working environments, the more that people inhabiting those spaces understand 
             and value things like emotional intelligence. <br></br>

           <h4>Does the time you spent studying core learning here feel like a waste of time? Should you have just used 
           that time to practising programming instead? Justify your answer. </h4>
             As I said above, I feel like this core learning is an excellent use of time. I prefer a working landscape 
             where I know how to feel calm, focused, nourished, understood, internally balanced. I prefer understanding 
             how to communicate with and understand those around me. It is hugely beneficial for every aspect of life to 
             be learning about mindfulness, growth mindset, and my own relationship with self. I cannot fault it, and I'm 
             looking forward to exploring this new way of being alongside my cohort. <br></br>
             I also enjoyed getting to mix up the subject matter, I feel like huge chunks of tech learning would've 
             been overwhelming. The brain needs time to rest and integrate, and learning good study techniques, means that 
             all of the things I have yet to learn feel less daunting and more achievable.
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

export default BlogRefl
