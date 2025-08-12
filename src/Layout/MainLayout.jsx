import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Banner from '../Page/Banner';
import Footer from '../Component/Footer';
import ExtraSection1 from '../Component/ExtraSection/ExtraSection1';
import Spinner from '../Component/Spinner/Spinner';
import ExtraSection2 from '../Component/ExtraSection/ExtraSection2';


const MainLayout = () => {
    return (
        <div className=''>
            
            <Header></Header>
            
            <Banner></Banner>
          
           <Outlet></Outlet> 
           <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
           <Footer></Footer>
         
          
        </div>
    );
};

export default MainLayout;