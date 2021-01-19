import React, { useState, useEffect } from 'react'
// GraphQL dependencies
import { useQuery, useMutation } from '@apollo/client'
import { CHECK_USERNAME, CREATE_USER } from '../graphql'
import { v4 as uuid_v4 } from 'uuid'
import { Link, Redirect } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [emailPassword, setEmailPassword] = useState('')
    const [errors, setErrors] = useState('')
    const [redirect, setRedirect] = useState(null)

    const { loading, error, data } = useQuery(CHECK_USERNAME, {
        variables: {
            username: name,
        },
    })

    const [createUser] = useMutation(CREATE_USER)

    const validation = () => {
        // Check required fields
        if (!name || !password || !password2 || !email || !emailPassword) {
            setErrors('Please fill in all fields')
            return 0
        }
        // check name availability
        if (!data.checkUsername) {
            setErrors('Username Unavailable')
            return 0
        }
        // password === password2
        if (password !== password2) {
            setErrors('Passwords do not match')
            return 0
        } else return 1
    }

    const handleSubmit = async () => {
        if (validation() === 1) {
            console.log('success')
            // create a user
            await createUser({
                variables: {
                    username: name,
                    password: password,
                    id: uuid_v4(),
                    emailAddress: email,
                    emailPassword: emailPassword,
                },
            })
            setRedirect(<Redirect to='/login'></Redirect>)
        } else {
            console.log('fail')
            console.log('errors:', errors)
        }
        console.log(
            name + '  ' + password + '  ' + email + '  ' + emailPassword
        )
    }

    return (
        <>
            {!redirect ? (
                <div className='row mt-5'>
                    <div className='col-md-4 m-auto'>
                        <div className='card card-body'>
                            <h1 className='text-center mb-3'>Register</h1>
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
                                    <label className='loginP' htmlFor='name'>
                                        Name
                                    </label>
                                    <input
                                        type='name'
                                        id='name'
                                        name='name'
                                        className='loginF'
                                        placeholder='Enter Name'
                                        defaultValue=''
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
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
                                        placeholder='Create Password'
                                        defaultValue=''
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div className='form-group'>
                                    <label
                                        className='loginP'
                                        htmlFor='password2'
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type='password'
                                        id='password2'
                                        name='password2'
                                        className='loginF'
                                        placeholder='Confirm Password'
                                        defaultValue=''
                                        onChange={(e) =>
                                            setPassword2(e.target.value)
                                        }
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
                                        defaultValue=''
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div className='form-group'>
                                    <label
                                        className='loginP'
                                        htmlFor='password3'
                                    >
                                        Email Password
                                    </label>
                                    <input
                                        type='password'
                                        id='password3'
                                        name='email'
                                        className='loginF'
                                        placeholder='Enter Email Password'
                                        defaultValue=''
                                        onChange={(e) =>
                                            setEmailPassword(e.target.value)
                                        }
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='btn btn-success btn-block'
                                    onClick={() => handleSubmit()}
                                >
                                    Register
                                </button>
                            </div>
                            <p className='mt-4 loginP'>
                                Have An Account? <Link to='/login'>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                redirect
            )}
        </>
    )
}

export default Register
