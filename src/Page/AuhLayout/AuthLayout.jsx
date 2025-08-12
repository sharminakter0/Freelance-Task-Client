import React from 'react';
import Login from '../LoginPage/Login';


import { Outlet } from 'react-router';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
        <header className='mx-auto'>
          <Header></Header>   
        </header>
       
        <main className=''>
            <Outlet></Outlet>
           
           
        </main>
       <Footer></Footer>
        </div>
    );
};

export default AuthLayout;