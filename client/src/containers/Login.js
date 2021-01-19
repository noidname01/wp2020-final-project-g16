
import React, { useEffect, useState } from 'react'


const Login = () => {
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [errors, setErrors] = useState('')

    const handleSubmit = () => {
        console.log('login:', usernameInput, passwordInput)
        validation()
    }

    const validation = () => {
        // Check required fields
        if (!usernameInput || !passwordInput) {
            setErrors('Please fill in all fields')
        }
    }

    return (
        <div className='row mt-5'>
            <div className='col-md-4 m-auto'>
                <div className='card card-body'>
                    <h1 className='text-center mb-3'>Login</h1>
                    {errors.length > 0 ? (
                        <div className='alert alert-warning' role='alert'>
                            {errors}
                        </div>
                    ) : (
                        <></>
                    )}
                    <div>
                        <div className='form-group'>
                            <label className='loginP' htmlFor='username'>
                                Username
                            </label>
                            <input
                                type='text'
                                id='username'
                                name='username'
                                className='loginF'
                                placeholder='Enter Username'
                                onChange={(e) => {
                                    setUsernameInput(e.target.value)
                                }}
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
                                onChange={(e) =>
                                    setPasswordInput(e.target.value)
                                }
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-success btn-block'
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>
                    <p className='loginP mt-4'>
                        No Account? <a href='/register'>Register</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
