import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './TaskCard';
import { Typewriter } from 'react-simple-typewriter';


const handleDone = () => {
    console.log(`Done after 5 loops!`)}


const Home = () => {
    const tasks = useLoaderData();
    console.log(tasks);

  

  
  

    return (
    <div className=''> 
    <h2 className='text-2xl font-bold text-center text-pink-500 my-4'>
   <Typewriter
            words={['Hire Talent', 'Post Tasks', 'Get Paid!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            
          />
    </h2>

   
        <div className='my-9 w-11/12 mx-auto'>
<h1 className='text-4xl font-bold text-center mb-3'>Popular Services</h1>
            <p className='text-sm text-gray-700 text-center mb-8 mt-4'>Explore our most in-demand freelance services, handpicked based on quality, speed, and client satisfaction. <br /> Whether you need graphic design, content writing, web development, or marketing support — these top-rated freelancers are ready to deliver.</p>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
            { Array.isArray(tasks) && tasks.map(task=><TaskCard key={task._id} task ={task}></TaskCard>)}
        </div>
        </div>
       </div>
    
    );
};

export default Home;