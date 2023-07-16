import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CustomerReview = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10 mt-10'>
            <h1 className="text-center font-semibold md:text-5xl text-3xl my-10 text-white-950 ">Words from our customers</h1>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
            >
                <SwiperSlide className="max-w-xs min-w-xs text-white text-center bg-white-950 lg:max-w-lg md:max-w-md  mx-auto rounded-2xl">
                    <div className=" px-4 pt-8 pb-6">
                        <img className='rounded-full border-2 border-lime-800 w-24 mx-auto mt-5' src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.2.670690934.1670350375&semt=ais" alt="" />
                        <p className="text-2xl text-white mb-5 mt-2 font-semibold text-orange-400">Olivier</p>
                        <p className="mb-10 bg-lime-800 text-white mx-5 py-3 px-5 rounded-full">This toy shop is fantastic! They have a wide range of action figures for kids of all ages. The quality of the toys is top-notch,T The attention to detail in each figure is remarkable. Highly recommended!</p>
                        
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide className="max-w-xs min-w-xs text-white text-center bg-white-950   lg:max-w-lg md:max-w-md  mx-auto rounded-2xl">
                    <div className="px-4 pt-8 pb-6">
                        <img className='rounded-full border-2 border-lime-800 w-24 mx-auto mt-5' src="https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-coral-pink-studio-background-with-copyspace_155003-46026.jpg?size=626&ext=jpg&ga=GA1.2.670690934.1670350375&semt=ais" alt="" />
                        <p className="text-2xl text-white mb-5 mt-2 font-semibold text-orange-400">Sophia</p>
                        <p className="mb-10 bg-lime-800 text-white mx-5 py-3 px-5 rounded-full">As a parent, I\'m always on the lookout for high-quality toys for my kids. This toy shop exceeded my expectations. The action figures are durable and safe for children.Thank you for providing such great toys!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="max-w-xs min-w-xs text-white text-center bg-white-950   lg:max-w-lg md:max-w-md  mx-auto rounded-2xl">
                    <div className="px-4 pt-8 pb-6">
                        <img className='rounded-full border-2 border-lime-800 w-24 mx-auto mt-5' src="https://img.freepik.com/free-photo/portrait-handsome-brunet-unshaven-adult-man-looks-with-calm-confident-expression-has-serious-look-wears-casual-jumper-poses-making-photo-against-white-background-being-hard-impress_273609-57668.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" alt="" />
                        <p className="text-2xl text-white mb-5 mt-2 font-semibold text-orange-400">Ben</p>
                        <p className="mb-10 bg-lime-800 text-white mx-5 py-3 px-5 rounded-full">I\'m a collector of action figures, and I must say this toy shop is a collector\'s paradise. They have a fantastic collection of rare and limited edition figures.This is now my go-to shop for all my action figure needs!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="max-w-xs min-w-xs text-white text-center bg-white-950   lg:max-w-lg md:max-w-md  mx-auto rounded-2xl">
                    <div className="px-4 pt-8 pb-6">
                        <img className='rounded-full border-2 border-lime-800 w-24 mx-auto mt-5' src="https://img.freepik.com/free-photo/worldface-american-man-white-background_53876-146319.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" alt="" />
                        <p className="text-2xl text-white mb-5 mt-2 font-semibold text-orange-400">Jack</p>
                        <p className="mb-10 bg-lime-800 text-white mx-5 py-3 px-5 rounded-full">I recently purchased action figures for my nephew from this toy shop, and he absolutely loved them! The toys were well-packaged and arrived on time. Thank you for making my nephew happy!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="max-w-xs min-w-xs text-white text-center bg-white-950   lg:max-w-lg md:max-w-md  mx-auto rounded-2xl">
                    <div className="px-4 pt-8 pb-6">
                        <img className='rounded-full border-2 border-lime-800 w-24 mx-auto mt-5' src="https://img.freepik.com/free-photo/close-up-stylish-attractive-girl-with-hairbun-smiling-looking-hopeful_176420-25550.jpg?size=626&ext=jpg&ga=GA1.2.670690934.1670350375&semt=ais" alt="" />
                        <p className="text-2xl text-white mb-5 mt-2 font-semibold text-orange-400">Emily</p>
                        <p className="mb-10 bg-lime-800 text-white mx-5 py-3 px-5 rounded-full">I have been collecting action figures for years, and I have to say this toy shopand the ordering process is seamless. The toys are of excellent quality I highly recommend this shop to all action figure enthusiasts!</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CustomerReview;