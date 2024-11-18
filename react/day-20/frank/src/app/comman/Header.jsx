"use client"
import React from 'react'
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Header.css'
import { FaBars } from "react-icons/fa";

export default function Header() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
    };
    return (
        <div>
            {/* start-top-header */}
            <div className='w-full grid grid-cols-[80%_10%] py-[2px] mr-[10%] items-center bg-[#04221B] text-white'>
                <div className='text-white ml-[10%]   '>
                    <Slider {...settings}>
                        <div className='text-center text-[14px]'>
                            <h3>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men</h3>
                        </div>
                        
                        <div className='text-center text-[14px]'>
                            <h3>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men</h3>
                        </div>

                        <div className='text-center text-[14px]'>
                            <h3>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men</h3>
                        </div>

                        <div className='text-center text-[14px]'>
                            <h3>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men</h3>
                        </div>

                        <div className='text-center text-[14px]'>
                            <h3>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men</h3>
                        </div>
                    </Slider>
                </div>
                <div className='flex items-center text-[18px] rightDiv  justify-evenly '>
                    <LiaFlagUsaSolid /> <span> $ USD </span> <IoIosArrowDown />
                </div>
            </div>
            {/* close-top-header */}

            {/* start bottom-header */}
                <div className='w-full '>
                <FaBars className='block md:hidden' />
                <div className='grid grid-cols-[60%_auto]'>
                    <ul className='flex  '>
                        <li className='p-[5px_20px] font-bold ' >Frank And Oak</li>
                        <li className='p-[5px_20px]'>BLACK FRIDAY</li>
                        <li className='p-[5px_20px]'>Men</li>
                        <li className='p-[5px_20px]'>Women</li>
                    </ul>

                    <div className=''>
                        right icon
                    </div>
                </div>
                </div>
            {/* close bottom-header */}
        </div>
    )
}
