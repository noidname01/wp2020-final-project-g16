import React, { useState } from 'react'
// GraphQL dependencies
import { useQuery, useMutation } from '@apollo/client'
import { CHECK_USERNAME, CREATE_USER } from '../graphql'
import { v4 as uuid_v4 } from 'uuid'

const Register = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [emailPassword, setEmailPassword] = useState('')

    const { loading, error, data } = useQuery(CHECK_USERNAME, {
        variables: {
            username: name,
        },
    })

    const [createUser] = useMutation(CREATE_USER)

    const handleSubmit = async () => {
        // fill up every input
        if (name === '') {
            return
        } else if (password === '') {
            return
        } else if (password2 === '') {
            return
        } else if (email === '') {
            return
        } else if (emailPassword === '') {
            return
        }

        // password === password2
        if (password !== password2) {
            return
        }

        // check name availability
        if (!data.checkUsername) {
            alert('Username Unavailable')
            return
        }

        console.log(
            name + '  ' + password + '  ' + email + '  ' + emailPassword
        )

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
    }

    return (
        <div className='row mt-5'>
            <div className='col-md-4 m-auto'>
                <div className='card card-body'>
                    <h1 className='text-center mb-3'>Register</h1>
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
                                onChange={(e) => setName(e.target.value)}
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
                                defaultValue=''
                                onChange={(e) => setPassword(e.target.value)}
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
                                defaultValue=''
                                onChange={(e) => setPassword2(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label className='loginP' htmlFor='password3'>
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
                        Have An Account? <a href='/login'>Login</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
