import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from './ToyRow';
import { Helmet } from 'react-helmet';

const AllToys = () => {
    const toys = useLoaderData()
    const [searchInput, setSearchInput] = useState('');
    const [filteredToys, setFilteredToys] = useState(toys);
  
    const handleSearchButtonClick = () => {
      // Filter toys based on search input
      const filteredToys = toys.filter((toy) =>
        toy.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredToys(filteredToys);
    };

    return (
        <div>
            <Helmet>
                <title>Happy Kids World | All Toys</title>
            </Helmet>
            <div className='flex justify-center items-center gap-2 my-5'>
            <input className='w-60 px-2 py-1 border-2 rounded-md'
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search by toy name"
            />
            <button className='btn btn-sm bg-orange-500 border-0' onClick={handleSearchButtonClick}>Search</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Sub-categorry</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredToys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)
                        }
                    </tbody>

                </table>
                
            </div>
        </div>
    );
};

export default AllToys;