import React, { useContext } from 'react';
import logo from '/assets/HKW.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
            .then()
            .catch()
    }
    return (
        <div className="navbar rounded-b-lg py-3 md:pe-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        {
                            user &&
                            <div>
                                <li><Link to='/addAToy'>Add a Toy</Link></li>
                                <li><Link to='/myToys'>My Toys</Link></li>
                            </div>
                        }
                        <li><Link to='/blog'>Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/'><img className='w-8 rounded-md md:ml-3' src={logo} alt="" /></Link>
                <div className='ml-3 md:ml-5'>
                    <p className="normal-case text-xl md:text-2xl font-serif">Happy Kids World</p>
                    <p className='text-xs'>Enjoy your Childhood</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        {
                            user &&
                            <div className='flex'>
                                <li><Link to='/addAToy'>Add a Toy</Link></li>
                                <li><Link to='/myToys'>My Toys</Link></li>
                            </div>
                        }
                        <li><Link to='/blog'>BlOgs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user ?
                        <>
                            <div className="tooltip flex justify-center" data-tip={user?.displayName}>
                                <img src={user?.photoURL} className='rounded-full w-2/5 max-w-xs' />
                            </div>
                            <button className='btn bg-lime-800 border-0 font-semibold' onClick={handleLogOut}>Logout</button>
                        </> :
                        <button className='btn bg-lime-800 border-0'> <Link to='/login'>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Header;