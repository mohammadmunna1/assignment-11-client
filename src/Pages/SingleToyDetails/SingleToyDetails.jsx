import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const toy= useLoaderData()
    const {name, picture, seller, seller_email, price, rating, available_quantity, description}= toy
    return (
        <div className='flex justify-evenly gap-10 my-10 px-5 items-center'>
            <img src={picture} alt="" />
            <div>
                <h2 className='text-3xl text-orange-500 mb-5'>{name}</h2>
                <p><span className='font-semibold'>Description: </span>{description}</p>
                <p><span className='font-semibold'>Seller: </span> {seller}</p>
                <p><span className='font-semibold'>Email: </span> {seller_email}</p>
                <p><span className='font-semibold'>Available: </span> {available_quantity} pieces</p>
                <p><span className='font-semibold'>Price: </span> ${price}</p>
                <p><span className='font-semibold'>Ratingss: </span> {rating}</p>
            </div>
        </div>
    );
};

export default SingleToyDetails;