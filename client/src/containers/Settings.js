import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'

const Settings = (props) => {
    const { userInfo } = props
    const { username, password, emailAddress, emailPassword } = userInfo
    const [name, setName] = useState('')
    const [pass, setPassword] = useState('')
    const [pass2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [emailPass, setEmailPassword] = useState('')
    const [theme, setTheme] = useState('black')

    const handleChangeTheme = () => {
        setTheme(theme === 'black' ? 'white' : 'black')
    }

    return (
        <div className='row mt-5'>
            <div className='col-md-4 m-auto'>
                <div className='card card-body'>
                    <h1 className='text-center mb-3'>Settings</h1>

                    <div>
                        <div class='custom-control custom-switch'>
                            <input
                                type='checkbox'
                                class='custom-control-input'
                                id='customSwitch1'
                                onChange={handleChangeTheme}
                            />
                            <label
                                class='custom-control-label'
                                style={{ color: 'black' }}
                                for='customSwitch1'
                            >
                                {theme} Mode
                            </label>
                        </div>
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
                                defaultValue={username}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label className='loginP' htmlFor='password'>
                                Password
                            </label>
                            <input
                                // type='password'
                                id='password'
                                name='password'
                                className='loginF'
                                // placeholder='Create Password'
                                defaultValue={password}
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
                                defaultValue={emailAddress}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label className='loginP' htmlFor='password3'>
                                Email Password
                            </label>
                            <input
                                // type='password'
                                id='password3'
                                name='email'
                                className='loginF'
                                placeholder='Enter Email Password'
                                defaultValue={emailPassword}
                                onChange={(e) =>
                                    setEmailPassword(e.target.value)
                                }
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-success btn-block'
                            onClick={() => handleSave()}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
