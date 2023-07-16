import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy }) => {
    const { picture, name, seller, category, available_quantity } = toy
    return (
        <tr>
            <td>
                <div className="mask mask-squircle w-10 h-10">
                    <img src={picture} />
                </div>
            </td>
            <td>{name}</td>
            <td>{seller? seller: ''}</td>
            <td>{category}</td>
            <td>{available_quantity}</td>
            <th>
                <Link to={`/singleToyDetails/${toy._id}`}><button className="btn btn-ghost btn-xs">view Details</button></Link>
            </th>
        </tr>
    );
};

export default ToyRow;