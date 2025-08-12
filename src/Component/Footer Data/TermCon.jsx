import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const TermCon = () => {
    return (
        <>
        <Header/>
        <div className='my-10 w-11/12 mx-auto'>
         <h1  className='text-4xl font-bold text-center mb-2'>Term & Conditions</h1> 
         <p className='text-sm font-light text-gray-900 text-center mb-5'>By using our freelance task marketplace, you agree to the following terms and conditions:</p>

         <div>
            
            <h3 className='font-semibold text-lg mb-1'> 1.  Account Responsibility</h3>
            <p className='text-md text-gray-800 mb-2'>Users are responsible for maintaining the confidentiality of their account credentials and for all activities conducted under their account.</p>
         </div>

          <div>
            
            <h3 className='font-semibold text-lg mb-1'> 2. Task Posting & Bidding</h3>
            <p className='text-md text-gray-800 mb-2'>Clients must post accurate task descriptions. Freelancers must only bid on tasks they are qualified to complete.</p>
         </div>
          <div>
            
            <h3 className='font-semibold text-lg mb-1'> 3.  Payments</h3>
            <p className='text-md text-gray-800 mb-2'>All payments should be made through our platform for security and record-keeping. We are not responsible for transactions made outside our system.</p>
         </div>

          <div>
            
            <h3 className='font-semibold text-lg mb-1'> 4.  Prohibited Activities</h3>
            <p className='text-md text-gray-800 mb-2'>Users must not engage in fraud, abuse, harassment, or any activity that violates local laws or our platform guidelines.</p>
         </div>
           <div>
            
            <h3 className='font-semibold text-lg mb-1'> 5.  Disputes</h3>
            <p className='text-md text-gray-800 mb-2'>In case of a dispute, both parties agree to attempt resolution through our support system. We reserve the right to mediate and make final decisions.</p>
         </div>

           <div>
            
            <h3 className='font-semibold text-lg mb-1'> 6.  Platform Rights</h3>
            <p className='text-md text-gray-800 mb-2'>We reserve the right to suspend or terminate any account that violates these terms or harms the community experience.</p>
         </div>
         <div>
            
            <h3 className='font-semibold text-lg mb-1'> 7.  Changes to Terms</h3>
            <p className='text-md text-gray-800 mb-2'>We may update these terms occasionally. Continued use of the platform after changes means you accept the new terms.</p>
         </div>
         
        </div>
        <Footer/>
        </>
    );
};

export default TermCon;