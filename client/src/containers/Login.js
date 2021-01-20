import React, { useEffect, useState } from 'react'
// GraphQL dependencies
import { useQuery, useMutation } from '@apollo/client'
import { GET_USER } from '../graphql'
import { Link, Redirect } from 'react-router-dom'

const Login = () => {
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [errors, setErrors] = useState('')
    const [redirect, setRedirect] = useState(null)

    const { loading, error, data } = useQuery(GET_USER, {
        variables: {
            username: usernameInput,
            password: passwordInput,
        },
    })

    const handleSubmit = () => {
        console.log('login: ', usernameInput, passwordInput)

        validation()
    }

    const validation = () => {
        // Check required fields
        if (!usernameInput || !passwordInput) {
            setErrors('Please fill in all fields')
        }

        if (data.getUser[0] === undefined) {
            alert('Wrong username and password!!!')
        } else {
            console.log(data.getUser[0])
            localStorage.setItem('auth', 'true') // data.getUser[0] contains the info of user
            userInfoToLocalStorage(data.getUser[0])
            localStorage.setItem('mode', 'dark')
            setRedirect(
                <Redirect
                    to={{
                        pathname: '/ee',
                        state: {
                            userinfo: data.getUser[0],
                        },
                    }}
                ></Redirect>
            )
        }
    }

    // ================ localStorage Test ===================
    const userInfoToLocalStorage = (userInfo) => {
        Object.keys(userInfo).forEach((input) => {
            console.log(input)
            console.log(userInfo[input])
            localStorage.setItem(input, userInfo[input])
        })
    }
    // ================ localStorage Test ===================

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            console.log('login: ', usernameInput, passwordInput)

            validation()
        }
    }

    useEffect(() => {
        localStorage.setItem('auth', 'false')
    }, [])

    return (
        <div className='frame xCen yCen'>
            <div className='container'>
                {!redirect ? (
                    <div className='row mb-5'>
                        <div className='col-md-5 m-auto'>
                            <div className='card card-body ca'>
                                <h1 className='text-center mb-3'>Login</h1>
                                {errors.length > 0 ? (
                                    <div
                                        className='alert alert-warning'
                                        role='alert'
                                    >
                                        {errors}
                                    </div>
                                ) : (
                                    <></>
                                )}
                                <div>
                                    <div className='form-group'>
                                        <label
                                            className='loginP'
                                            htmlFor='username'
                                        >
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
                                        <label
                                            className='loginP'
                                            htmlFor='password'
                                        >
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
                                            onKeyUp={handleKeyUp}
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        className='btn btn-info btn-block'
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </button>
                                </div>
                                <p className='loginP mt-4'>
                                    No Account?{' '}
                                    <Link to='/register'>Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    redirect
                )}
            </div>
        </div>
    )
}

export default Login
