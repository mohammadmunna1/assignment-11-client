import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const AddAToy = () => {
    const {user}= useContext(AuthContext)
    const handleAddAToy = event => {
        event.preventDefault()
        const form = event.target
        const toy_name= form.toy_name.value;
        const photo= form.photo.value;
        const seller_name= form.seller_name.value;
        const email= form.email.value;
        const category= form.category.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const quantity= form.quantity.value;
        const description= form.description.value;

        const AddedToy={
            name: toy_name,
            picture: photo,
            seller: seller_name,
            seller_email: email,
            category,
            price,
            rating,
            available_quantity:quantity,
            description
        }
        console.log(AddedToy)

        fetch('https://assigenment11-server.vercel.app/toys', {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(AddedToy)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'You Added the product!',
                    'success'
                  )
                
            }
        })
        form.reset()
    }
    return (
        <div className='mb-10 px-5'>
            <Helmet>
                <title>Happy Kids World | Add a Toy</title>
            </Helmet>
            <h2 className='text-center font-semibold text-5xl my-8'>Add a Toy</h2>

            <form onSubmit={handleAddAToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {/* Picture URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" />
                    </div>

                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toy_name" placeholder="Toy name" className="input input-bordered" />
                    </div>

                    {/* Seller Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="seller_name"
                            defaultValue={user?.displayName}
                            placeholder="Seller name" className="input input-bordered" />
                    </div>

                    {/* Seller Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name="email"
                            defaultValue={user?.email}
                            placeholder="Seller email" className="input input-bordered" />
                    </div>

                    {/* Sub-category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" name="category" placeholder="Sub-category" className="input input-bordered" />
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price of the toy" className="input input-bordered" />
                    </div>

                    {/* Rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratingg</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating of the toy" className="input input-bordered" />
                    </div>

                    {/* Available quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Detail Description" className="input input-bordered" />
                    </div>

                </div>

                <div className="form-control mt-5">
                    <input className="btn bg-orange-500 border-0 btn-block" type="submit" value="Add this toy" />
                    
                </div>
            </form>
            <Toaster position="top-right" />
        </div>
    );
};

export default AddAToy;