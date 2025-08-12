import React from 'react';
import { GiStarMedal } from "react-icons/gi";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import image from '../../../public/tourist_va_03.jpg'
import CountUp from 'react-countup';

const ExtraSection1 = () => {
    return (
       <section className='bg-amber-50 my-7 py-6 '>

      <div className='w-11/12 mx-auto '>

        <h1  className='text-3xl text-center font-bold'>A whole world of freelance talent at your fingertips</h1>


        {/* text */}
       <div className='grid grid-cols-1 md:grid-cols-2 gap-15 mt-10'>
       {/* #######    1    ######## */}
       <div className='mt-6'>
       <div className='flex  gap-4 mt-8'>
        {/* icon */}
        <GiStarMedal className='mt-4 size-5' />
        <div>
            <h3 className='text-xl font-semibold'>Proof of quality</h3>
            <p className='text-sm'>Check any pro’s work samples, client reviews, and identity verification.</p>
        </div>
     </div>

  {/* ##########     2     ######## */}
     <div className='flex  gap-4 mt-8'>
        {/* icon */}
        <FaCircleDollarToSlot className='mt-4 size-5' />
        <div>
            <h3 className='text-xl font-semibold'>No cost until you hire</h3>
            <p className='text-sm'>Interview potential fits for your job, negotiate rates, and only pay for work you approve.</p>
        </div>
     </div>


     {/* ########     3     ##### */}

      <div className='flex  gap-4 mt-8'>
        {/* icon */}
        <AiFillSafetyCertificate className='mt-4 size-5' />
        <div>
            <h3 className='text-xl font-semibold'>Safe and secure</h3>
            <p className='text-sm'>Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.</p>
        </div>
     </div>


     <div className='grid grid-cols-2 gap-3 my-4'>

      <div className=''>
         <h1 className='text-2xl font-bold ' ><CountUp end={890} duration={10} separator=','></CountUp>M</h1>
         <p className=''>Total Freelancer</p>
      </div>
           <div className=''>
         <h1 className='text-2xl font-bold ' ><CountUp end={750} duration={10} separator=','></CountUp>M</h1>
         <p className=''>Post Review</p>
      </div>
            <div className=''>
         <h1 className='text-2xl font-bold ' ><CountUp end={98} duration={6} separator=','></CountUp>M</h1>
         <p className=''>Order Recieved</p>
      </div>
           <div className=''>
         <h1 className='text-2xl font-bold ' ><CountUp end={336} duration={10} separator=','></CountUp>M</h1>
         <p className=''>Project Completed</p>
      </div>


     </div>

{/*  */}
</div>

     <div>
        <img src={image} alt=""
        className='h-[400px] w-[600px]' />
     </div>
     </div>
      </div>


       </section>
    );
};

export default ExtraSection1;