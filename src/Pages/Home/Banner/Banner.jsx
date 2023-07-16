import React from 'react';
import banner1 from '/assets/Banner/banner-1.png'
import banner2 from '/assets/Banner/banner-2.png'
import banner3 from '/assets/Banner/banner-3.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (

        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn bg-lime-700 btn-square btn-sm md:btn-lg"><FaArrowLeft /></a>
                    <a href="#slide2" className="btn bg-lime-700 btn-square btn-sm md:btn-lg"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn bg-lime-700 btn-square btn-sm md:btn-lg"><FaArrowLeft /></a>
                    <a href="#slide3" className="btn bg-lime-700 btn-square btn-sm md:btn-lg"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn bg-lime-700 btn-square btn-sm md:btn-lg"><FaArrowLeft /></a>
                    <a href="#slide1" className="btn bg-lime-700 btn-square btn-sm md:btn-lg"><FaArrowRight /></a>
                </div>
            </div>
        </div>

    );
};

export default Banner;

