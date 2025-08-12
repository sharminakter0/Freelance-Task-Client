import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from '../../Component/TaskCard';
import TaskcardDetails from '../../Component/TaskcardDetails';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';

const BrowseTask = () => {
    
   
    const tasks = useLoaderData()
    return (
        <>
        <Header></Header>
        <div className='justify-between mx-auto w-11/12 text-center my-10'>
         <h1 className='text-4xl font-bold my-5'>Browse Tasks</h1>
         {tasks.length ===0 ? (
            <p>No Task Found</p>

         ) :(
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {tasks.map(task=>(
                    <TaskCard key={task._id} task ={task}>   </TaskCard>
                ))}
            </div>
         ) }
        </div>
        <Footer></Footer>
        </>
    );
};

export default BrowseTask;