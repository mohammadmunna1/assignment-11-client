import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/HKW.png'
import { FaEye } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('');

   
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        setSuccess('')
        setSuccess('')

        if (password.length < 6) {
            setError('Password must be six characters long')
            return
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                setError('')
                setSuccess('Registration successful')
                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log('Profile Updated!')
                    })
                    .catch((error) => setError(error.message));
                form.reset()
            })
            .catch(err => setError(err.message))
    }
    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Happy Kids World| Register</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <img className='w-12 rounded mb-10' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Sign up your account</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your PhotoURL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered relative" />
                                
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {success !== '' && <p className='text-green-500 text-xs mt-3 text-center'>{success}</p>}
                        {error !== '' && <p className='text-red-500 text-xs mt-3 text-center'>{error}</p>}
                        <p className='text-center mt-3'>Already have an account? <Link to='/login'><span className='text-primary'>Login</span></Link></p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;