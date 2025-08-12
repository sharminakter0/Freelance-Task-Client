import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaHeart } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import Footer from './Footer';
import Header from './Header';

const TaskcardDetails = () => {
    const task = useLoaderData();
    const {_id,title,description,category}=task
     

    // laod bid count from localstorage by task id

    const getStoredBidsCount =()=>{

      const stored = localStorage.getItem(`bidsCount-${_id}`);
      return stored ? parseInt(stored,10):0;

    };


    // Bids count state
    const [bidsCount,setBidsCount]=useState(getStoredBidsCount);

    useEffect(()=>{
      localStorage.setItem(`bidsCount-${_id}`,bidsCount.toString());
    })

    // Function to handle bid button
    const handleBid =()=>{
      setBidsCount(prev => prev+1);
    };
    return (
        <>
        <Header></Header>
       <div className='text-center   '>
        <h2 className='font-bold text-4xl my-10'>Task Card Details</h2>
     {/* show the bids count */}


        <h3 className="text-xl font-semibold bg-green-500 mx-30 py-2 rounded-xl text-green-950 ">
         You bid for {bidsCount} {bidsCount ===1 ? 'opportunity':'opportunities'} 
        </h3>
        <div className='place-content-center justify-center w-11/12 mx-auto lg:w-4/12 md:6/12'>
            <div className="card bg-base-300  shadow-sm text-center my-10 ">
  <figure >
    <img
      src={ task.image}
      alt="image not loading" />
  </figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className='text-sm text-green-500'>{description}</p>
    <p className='text-xl font-semibold  text-purple-600'><span className='text-black'> Category:</span> {category}</p>
    <h2 className='text-xl font-medium text-red-400'><span className='text-black'>Budget:</span> ${task.budget}</h2>
    <p className='text-center text-lg font-extralight '><MdOutlineDateRange className='justify-self-center size-5' />{task.deadline}</p>
    <p className='bg-amber-500 w-3/12 rounded-xl  mx-auto '>{task.userName}</p>
    <div className="card-actions justify-between items-center ">
        <FaHeart className='size-7 text-red-600' />

      <button className="btn btn-primary" onClick={handleBid}>Bid</button>
    </div>
  </div>
</div>
        </div>
</div>
        <Footer></Footer>
        </>
    );
};

export default TaskcardDetails;