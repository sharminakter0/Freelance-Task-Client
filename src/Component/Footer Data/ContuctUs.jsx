import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Footer from '../Footer';
import Header from '../Header';

const ContuctUs = () => {
    return (


        <>
        <Header></Header>
        <div className=''>
            
         <div className="bg-purple-600 h-30 w-auto rounded text-white p-4">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p>We’d love to talk about how we can help you.</p>
            </div>  

       <div className='w-11/12 mx-auto'>
       <div className='my-8'>
         <h3 className='text-xl font-semibold mb-2'>Keep In Touch With Us</h3> 
         <p className=''>Have questions or need support? We're always here to help. Stay connected through our social media channels, or drop us a message — we’d love to hear from you!</p>     
       </div>
       <div className=''>

        <div className='flex items-center gap-3 my-3 '>
        <ImLocation2 className='size-7  text-purple-400' />
            <div>
            <h3 className='text-lg font-mono'>Address</h3>
            <p>328 South Alekanda Street,Barisal</p></div>
       
        </div>
         
        <div className='flex items-center gap-3 my-3 '>
         <FaPhoneAlt className='size-7 text-purple-400' />

         <div >
            <h3 className='text-lg font-mono'>Phone</h3>
         <p>(+880)123 456 789</p> </div>  
        </div>
        
        <div className='flex items-center gap-3 '>
       <IoIosMail className='size-7 text-purple-400' />
      <div> <h3 className="text-lg font-mono">Email</h3>
       <p>sharmin0@gmail.com</p></div>
       </div>
       </div>
       

      <div  className='bg-base-200 rounded p-6 my-8'>
         <h2 className='text-xl font-semibold text-purple-300'>Tell us about yourself</h2>
         <p className='text-sm mb-3'>Whether you have questions or you would just like to say hello, contact us.</p>
         <div className=''>
            <fieldset className="fieldset">
  <legend className="fieldset-legend text-lg">Name</legend>
  <input type="text" className="input" placeholder="Enter Your Name" />
 
</fieldset>

<fieldset>

      <legend className="fieldset-legend">Email</legend>  
        <label className="input validator">
            
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
</fieldset>
   <button className='btn btn-primary my-7'> Contact us</button>

         </div>
      </div>


        </div> 
        </div>
       <Footer></Footer> 
        </>
    );
};

export default ContuctUs;