import React from 'react'

const Register = () => {
    return (
        <div className='row mt-5'>
            <div className='col-md-4 m-auto'>
                <div className='card card-body'>
                    <h1 className='text-center mb-3'>Register</h1>
                    <form action='/users/register' method='POST'>
                        <div className='form-group'>
                            <label className='loginP' htmlFor='name'>
                                Name
                            </label>
                            <input
                                type='name'
                                id='name'
                                name='name'
                                className='loginF'
                                placeholder='Enter Name'
                                value=''
                            />
                        </div>
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
                                value=''
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
                                placeholder='Create Password'
                                value=''
                            />
                        </div>
                        <div className='form-group'>
                            <label className='loginP' htmlFor='password2'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                id='password2'
                                name='password2'
                                className='loginF'
                                placeholder='Confirm Password'
                                value=''
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-success btn-block'
                        >
                            Register
                        </button>
                    </form>
                    <p className='mt-4 loginP'>
                        Have An Account? <a href='/users/login'>Login</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
