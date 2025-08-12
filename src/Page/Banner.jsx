import React from 'react';
import {Swiper ,SwiperSlide}from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import {Pagination,Autoplay} from "swiper/modules";


const slides =[
    {   id:1,
        image:'https://i.ibb.co/WvqKy3t5/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg',
        title:'Find Your Next Freelance Task',
        btnText:'Browse Task',
        subtitle:'Discover thousands of jobs posted daily and grow your freelance career.'

    }
,
{   id:2,
        image:'https://i.ibb.co/9kYPCkj3/banner4.jpg',
        title:'Work With Global Clients',
        btnText:'Get Started',
        subtitle:'Collaborate with international businesses and build a global portfolio from home.'

    },
    {   id:3,
        image:'https://i.ibb.co/czfQbnK/image2.jpg',
        title:'Showcase Your Talent Today',
        btnText:'Join Now',
        subtitle:'Stand out with your skills and get hired by clients who value your expertise.'


    }
]

const Banner = () => {
    return (
        <div>
             <Swiper modules={[Pagination , Autoplay]}
           
            pagination = {{clickable:true}}

            autoplay={{delay:3000}}
            loop={true}
            className="rounded-lg shadow-md"
          >
            {slides.map((slide)=>(
                <SwiperSlide key ={slide.id}
               
              >
                    <div className="relative w-full h-[300px] md:h-[500px]">
                        <img src={slide.image} 
                         alt = {slide.title}
                        className='w-full h-full object-cover' />
                        <div className="absolute inset-0   flex flex-col justify-center items-center text-white text-center px-4">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                    <p className='text-sm mb-3'>{slide.subtitle}</p>
                   <button className="btn btn-primary px-6">
                  {slide.btnText}
                </button>
                 </div>
                       
                    </div>

                </SwiperSlide>
               
            ))}</Swiper> 
        </div>
       
    );
};

export default Banner;