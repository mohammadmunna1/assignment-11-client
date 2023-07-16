import React from 'react';
import { AiFillDelete } from 'react-icons/Ai';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToyRow = ({ toy, handleDelete, setUpdatedToys, handleUpdate }) => {
    const { _id, picture, name, seller, category, available_quantity, description, price, rating } = toy

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
            price,
            available_quantity: quantity,
            description
        }
        console.log(updatedToy)
        setUpdatedToys(updatedToy)
        handleUpdate(_id)
        form.reset()

    }
    return (

        <tr>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                        {/* Price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price of the toy" className="input input-bordered" />
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

                        <div className="form-control mt-5">
                            <input className="btn bg-orange-500 border-0 btn-block" type="submit" value="Update" />

                        </div>
                    </form>
                </div>
            </div>


            
            <td>
                <div className="mask mask-squircle w-10 h-10">
                    <img src={picture} />
                </div>
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{seller}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td>{rating}</td>
            <td>{description}</td>
            <th>
                <label htmlFor="my-modal-4" className="btn btn-ghost rounded"><FaEdit className='m-auto'/></label>
            </th>
            <th onClick={() => handleDelete(_id)} className='btn-ghost rounded my-auto'><AiFillDelete className='m-auto' /></th>
        </tr>
    );
};

export default MyToyRow;