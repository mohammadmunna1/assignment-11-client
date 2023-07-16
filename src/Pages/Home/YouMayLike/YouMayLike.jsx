import React from 'react';


const YouMayLike = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-center font-semibold md:text-5xl text-3xl text-white-100 my-8">You may also like</h1>
            <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/2005054/tinkerbell-fall-variant_j-scott-campbell_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Tinker Bell</h2>
                        <p className='text-sm'>  figure</p>
                        <p className='font-bold'>$400</p>
                    </div>
                    <button className='btn btn-block bg-lime-800 border-0'>Add to cart</button>
                </div>
                <div className='p-4 ' >
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/909000/brave-little-tailor_disney_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>MICKEY MOUSE</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p className='font-bold'>$345</p>
                    </div>
                    <button className='btn btn-block bg-lime-800 border-0'>Add to cart</button>
                </div>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/912295/winnie-the-pooh_disney_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Bee Hunter</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p>from <span className='font-bold'>$250</span></p>
                    </div>
                    <button className='btn btn-block bg-lime-800 border-0'>Add to cart</button>
                </div>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/911283/buzz-lightyear-alpha-suit__silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Toy Story</h2>
                        <p className='text-sm'>Sixth scale figure Accessory</p>
                        <p className='font-bold'>$285</p>
                    </div>
                    <button className='btn btn-block bg-lime-800 border-0'>Add to cart</button>
                </div>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/910445/belle-and-beast-light-up_disney_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Beauty and the beast</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p>from <span className='font-bold'>$265</span></p>
                    </div>
                    <button className='btn btn-block bg-lime-800 border-0'>Add to cart</button>
                </div>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/908384/tea-time-mad-hatter_disney_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Magic Hutter</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p className='font-bold'>$325</p>
                    </div>
                    <button className='btn btn-block bg-lime-800 border-0'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default YouMayLike;