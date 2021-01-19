import React, { useState } from 'react'

const Login = () => {
    return (
        <div className='row mt-5'>
            <div className='col-md-4 m-auto'>
                <div className='card card-body'>
                    <h1 className='text-center mb-3'>Login</h1>
                    <form action='/login' method='POST'>
                        <div className='form-group'>
                            <label className='loginP' htmlFor='email'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className='loginF'
                                placeholder='Enter Email'
                            />
                        </div>
                        <div className='form-group'>
                            <label className='loginP' htmlFor='password'>
                                Password
                            </label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                className='loginF'
                                placeholder='Enter Password'
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-success btn-block'
                        >
                            Login
                        </button>
                    </form>
                    <p className='loginP mt-4'>
                        No Account? <a href='/register'>Register</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
