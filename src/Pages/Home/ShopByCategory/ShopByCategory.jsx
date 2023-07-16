import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = async () => {
        try {
            const response = await fetch('https://assigenment11-server.vercel.app/toys');
            const data = await response.json();
            setToys(data);
        } catch (error) {
            console.error('Error fetching toys:', error);
        }
    };

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    const renderTabList = (categories) => {
        return (
            <TabList className="flex mb-4">
                {categories.map((category, index) => (
                    <Tab
                        key={category}
                        className={`px-4 py-2 mr-2 cursor-pointer ${activeTabIndex === index ? 'bg-gray-200' : ''
                            }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {category}
                    </Tab>
                ))}
            </TabList>
        );
    };

    const renderTabPanel = (category) => {
        const filteredToys = toys.filter((toy) => toy.category === category);

        return (
            <TabPanel key={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredToys.map((toy) => (
                        <div key={toy._id} className="p-4 border rounded-lg flex justify-evenly lg:justify-between items-center gap-4">
                            <img
                                src={toy.picture}
                                alt={toy.name}
                                className="mb-2 rounded-lg"
                                style={{ maxWidth: '200px' }}
                            />
                            <div>
                                <h2 className="text-2xl font-semibold text-orange-700 mb-5">{toy.name}</h2>
                                <p className="mb-1"><span className='font-semibold'>Price:</span> ${toy.price}</p>
                                <p className="mb-1"><span className='font-semibold'>Rating: </span>{toy.rating}</p>
                                <Link to={`/singleToyDetails/${toy._id}`}><div className="btn bg-lime-800 border-0 mt-5">View Detaills</div></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </TabPanel>
        );
    };

    return (
        <div className="container mx-auto py-8 max-w-7xl">
            <h1 className="font-semibold md:text-5xl text-3xl text-white-950  mb-4 text-center">Shop by category</h1>
            {toys.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <Tabs>
                    {renderTabList(['Pokemon', 'TinkerBell', 'Transformer'])}
                    {renderTabPanel('Pokemon')}
                    {renderTabPanel('TinkerBell')}
                    {renderTabPanel('Transformer')}
                </Tabs>
            )}
        </div>
    );
};

export default ShopByCategory;