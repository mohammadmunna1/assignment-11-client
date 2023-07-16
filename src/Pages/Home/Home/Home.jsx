import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import YouMayLike from '../YouMayLike/YouMayLike';
import CustomerReview from '../CustomerReview/CustomerReview';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='px-3'>
            <Helmet>
                <title>Happy Kids World| Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <YouMayLike></YouMayLike>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;