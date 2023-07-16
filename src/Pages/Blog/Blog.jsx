import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        
        <div className='px-8 my-10'>
            <Helmet>
                <title>Happy Kids World| Blog</title>
            </Helmet>
            <h2 className='text-2xl mb-2 text-black bg-lime-500'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className='mb-5 ps-5'>
                <span className='font-semibold'>Access Token:</span> Access token represents the authorization granted to a client application to access specific resources on behalf of a user. It is typically short-lived and has an  time. Access tokens are used to authenticate and authorize API requests. <br />

                <span className='font-semibold'>Refresh Token:</span> A refresh token is a long-lived credential used to obtain a new access token without requiring user interaction. Refresh tokens are typically issued alongside access tokens. When an access token expires, the client can use the refresh token to obtain a new access token. <br />

                When a user logs in to an application, the server provides both an access token and a refresh token to the client. The client uses the access token to make requests. If the access token expires, the client can send the refresh token to the server to obtain a new access token without requiring the user to re-enter their credentials. <br />

                Access tokens are usually stored in memory on the client-side. Refresh token is stored using HTTP-only cookies or in local storage in general practice. But localStorage is better place to store securely.
            </p>

            <h2 className='text-2xl mb-2 text-black bg-lime-500 '>2. Compare SQL and NoSQL databases.</h2>
            <div className="ps-5 mb-5">
                <table className=" table border-2 border-dashed">
                    {/* head */}
                    <thead>
                        <tr className='text-center '>
                            <th className='text-black bg-lime-600'>SQl</th>
                            <th className='text-black bg-lime-600'>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>SQL databases have a structured schema with a rigid tabular format and predefined <br /> columns and data types.</td>
                            <td> NoSQL databases have a flexible schema allowing for dynamic and unstructured data. <br /> Data can be stored in various formats like key-value pairs, documents, graphs etc.</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>SQL databases use the SQL language to query and manipulate data</td>
                            <td>NoSQL databases use a variety of query languages specific to the chosen data <br /> model, such as MongoDB's document query language or Cassandra's CQL</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td> SQL databases follow the relational data model, where data is organized into tables <br /> with defined relationships between them.</td>
                            <td>NoSQL databases provide different data models like key-value, document-oriented, columnar, <br /> or graph-based allowing for efficient storage and retrieval of unstructured data.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className='text-2xl mb-2 text-black bg-lime-500'>3. What is Express JS? What is Nest JS?</h2>
            <p className="ps-5 mb-5">
                <span className='font-semibold text-black bg-lime-600'>Express js:</span> Express.js is a flexible web application framework for Node.js which provides a simple and straightforward API for building web applications. It is known for its minimalist approach, allowing developers to have fine-grained control over the application's structure and behavior. It provides features like routing, middleware support and template engine integration. <br />

                <span className='font-semibold text-black bg-lime-600'>Node js:</span> Nest.js is a scalable and opinionated framework for building efficient and maintainable server-side applications in Node.js. It is built on top of Express.js. It offers built-in support for features like routing, dependency injection, middleware, and decorators for building APIs and microservices. 
            </p>

            <h2 className='text-2xl mb-2 text-black bg-lime-500'>4. What is MongoDB aggregate and how does it work?</h2>
            <p className="ps-5 mb-5"><span className='font-semibold text-black bg-lime-600'>MongoDB aggregate:</span> This method allows you to perform complex data aggregation operations on collections. It provides a way to process and transform data within the database and retrieve aggregated results. The aggregate method takes an array of stages as its argument. Each stage represents a specific operation. The stages are executed in sequence, with the output of each stage becoming the input for the next stage.</p>
        </div>
    );
};

export default Blog;