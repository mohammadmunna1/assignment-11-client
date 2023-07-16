import React from 'react';
import batman from '/assets/Gallery/batman.jpg'
import './Gallery.css'


const Gallery = () => {
    return (
        <div className='mb-10 max-w-7xl  mx-auto mt-10'>
            <h2 className='text-center font-semibold md:text-5xl text-3xl text-white-100 my-8'>Trending collections</h2>
            
            <div className='grid lg:grid-cols-3 gap-10'>

                <div className='grid grid-flow-row gap-5'>
                    <div className='h-80 w-80 text-white text-2xl text-center rounded-3xl antman mx-auto'>
                        <h2 className='text-4xl mb-4 font-extrabold mt-48 text-black'>pokemon</h2>
                        <button className='btn border-0 bg-lime-700'>Buy now</button>
                    </div>
                    <div className='h-80 w-80 text-white text-2xl text-center rounded-3xl gauntlet mx-auto'>
                        <h2 className='text-4xl mb-4 font-extrabold mt-48 text-black'>Frozen</h2>
                        <button className='btn border-0 bg-lime-700'>Buy now</button>
                    </div>
                </div>

            <div>
                    <div className='h-80 rounded-3xl w-80 text-white text-2xl text-center batman mx-auto'>
                       {/* <div className='h-[480px] w-[320px] text-white text-2xl text-center batman mx-auto my-auto'> */}
                        <h2 className='text-4xl font-extrabold mb-4 text-black mt-72'>Transformer</h2>
                        <button className='btn border-0 bg-lime-700'>Buy now</button>
                    </div>

                    <div className='incredible h-80 w-80 text-white text-2xl text-center rounded-3xl mx-auto'>
                        <h2 className='text-4xl font-extrabold mb-4 text-black mt-72'>Transformer</h2>
                        <button className='btn border-0 bg-lime-700'>Buy now</button>

                     </div>

            </div>

                <div className='grid grid-flow-row gap-5'>
                     <div className='h-80 w-80 text-white text-2xl text-center rounded-3xl mandalorian mx-auto'>
                        <h2 className='text-4xl mb-4 font-extrabold mt-48 text-black'>Dispincable Me</h2>
                        <button className='btn border-0 bg-lime-700'>Buy now</button>
                    </div>
                    <div className='h-80 w-80 text-white text-2xl text-center rounded-3xl deadpool mx-auto'>
                        <h2 className='text-4xl mb-4 font-extrabold mt-48 text-black'>Big Hero</h2>
                        <button className='btn border-0 bg-lime-700'>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;