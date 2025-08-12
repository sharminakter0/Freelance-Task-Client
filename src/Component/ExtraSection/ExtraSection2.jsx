import React from 'react';

const ExtraSection2 = () => {
    return (
        <div className='w-11/12 mx-auto  my-10'>
           <h1 className='text-3xl my-2 font-semibold'>Need Somthing Done?</h1> 
           <p className='text-sm text-gray-500 mb-8'>Most viewed and all-time to-selling services</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ' >

            {/*Card 1  */}
            <div className="card bg-base-100 shadow-sm ">
  <figure>
    <img 
      src="https://i.ibb.co/9HGX438H/h19-2.jpg"
      alt="pic" />
   </figure>
   <div className="card-body text-center">
    <h2 className="text-center  text-2xl font-semibold">Post a job</h2>
    <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
   
   </div>
   </div>
   {/* card 2 */}
   <div className="card bg-base-100 shadow-sm ">
  <figure>
    <img 
      src="https://i.ibb.co/Y4WW7bVd/h19-3.jpg"
      alt="pic2" />
   </figure>
   <div className="card-body text-center">
    <h2 className="text-center  text-2xl font-semibold">Choose freelancers</h2>
    <p> Select the one who best matches your goals, timeline, and budget.</p>
   
   </div>
   </div>

   {/* card3 */}

    <div className="card bg-base-100 shadow-sm ">
  <figure>
    <img 
      src="https://i.ibb.co/LhNkffJp/h19-4.jpg"
      alt="pic" />
   </figure>
   <div className="card-body text-center">
    <h2 className="text-center  text-2xl font-semibold">Pay Safely, Every Time</h2>
    <p>Your payment is secure with our trusted system</p>
   
   </div>
   </div>

   {/* card 4 */}
    <div className="card bg-base-100 shadow-sm ">
  <figure>
    <img 
      src="https://i.ibb.co/hRdZ00xX/h19-5.jpg"
      alt="pic" />
   </figure>
   <div className="card-body text-center">
    <h2 className="text-center  text-2xl font-semibold">We’re here to help</h2>
    <p>Our friendly team is always ready to assist you — whether it's about posting a task, hiring a freelancer, or handling payments. Reach out anytime!</p>
   
   </div>
   </div>
           </div>
        </div>
    );
};

export default ExtraSection2;