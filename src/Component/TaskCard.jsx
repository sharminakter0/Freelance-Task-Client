import React from 'react';
import { Link, } from 'react-router';
// import { CiHeart } from "react-icons/ci";

const TaskCard = ({task}) => {
   
    const{image,title,description,budget}=task
    
    return (
        <>
        
        <div className="">
            
            
            <div className="card bg-base-300 w-96 h-130   shadow-sm ">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="image"
      className=" rounded-xl h-[200px] w-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-2xl font-semibold ">{title}</h2>
    <p style={{
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis',
        width:'100%'
    }}
    className='text-green-500'>{description}</p>
    <h2 className='font-bold text-2xl text-red-500 items-start'> <span className='text-black'>Budget:</span>   ${budget}</h2>
    <div className="card-actions items-center">
     <Link to ={`/taskcard-details/${task._id}`}> <button className="btn btn-primary px-8 my-6">See Details</button></Link>
      {/* <CiHeart className='size-7 mt-5 ' /> */}
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default TaskCard;