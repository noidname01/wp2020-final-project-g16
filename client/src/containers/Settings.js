import React, { useState, useEffect } from 'react'

// GraphQL dependencies
import { useMutation } from '@apollo/client'
import { MODIFY_USER } from '../graphql'

// Snackbar dependencies
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Settings = (props) => {
    const { userInfo } = props
    const { username, password, emailAddress, emailPassword } = userInfo
    const [name, setName] = useState(username)
    const [pass, setPassword] = useState(password)
    const [pass2, setPassword2] = useState('')
    const [email, setEmail] = useState(emailAddress)
    const [emailPass, setEmailPassword] = useState(emailPassword)
    const [theme, setTheme] = useState('dark')

    // Snackbar States
    const [saveSuccess, setSaveSuccess] = useState(false)
    const [saveFail, setSaveFail] = useState({ state: false, message: 'error' })

    // GraphQL
    const [modifyUser] = useMutation(MODIFY_USER)

    const handleChangeTheme = () => {
        console.log(localStorage.getItem('mode'))
        if (localStorage.getItem('mode') === 'dark') {
            localStorage.setItem('mode', 'light')
            setTheme('light')
        } else {
            localStorage.setItem('mode', 'dark')
            setTheme('dark')
        }
    }

    const handleSave = async () => {
        if (pass !== pass2) {
            setSaveFail({ state: true, message: 'Passwords are not the same' })
            return
        }

        if (
            pass === '' ||
            name === '' ||
            pass2 === '' ||
            email === '' ||
            emailPass === ''
        ) {
            setSaveFail({
                state: true,
                message: 'Please fill in all the fields',
            })
            return
        }

        try {
            await modifyUser({
                variables: {
                    username: name,
                    password: pass,
                    id: userInfo.id,
                    emailAddress: email,
                    emailPassword: emailPass,
                },
            })
            setSaveSuccess(true)
        } catch {
            setSaveFail({
                state: true,
                message: 'Unable to save the changes...',
            })
        }
    }

    const handleSaveFailClose = () => {
        setSaveFail({ state: false, message: 'error' })
    }

    const handleSaveClose = () => {
        setSaveSuccess(false)
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.style.setProperty('--dark', '#2e2e2e')
            document.documentElement.style.setProperty('--light', '#ffffff')
            document.documentElement.style.setProperty(
                '--navbar-fontcolor',
                'rgba(46, 46, 46, 0.9)'
            )
        } else {
            document.documentElement.style.setProperty('--dark', '#ffffff')
            document.documentElement.style.setProperty('--light', '#2e2e2e')

            document.documentElement.style.setProperty(
                '--navbar-fontcolor',
                'rgba(255,255,255,0.9)'
            )
        }
    }, [theme])

    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    return (
        <>
            <div className='frameUp'>Settings</div>
            <div className='frameDown'>
                <div className='frameIn2'>
                    <div className='card setCard col-md-6 m-auto'>
                        <div className='card-body'>
                            <div>
                                <div className='custom-control custom-switch'>
                                    <input
                                        type='checkbox'
                                        className='custom-control-input'
                                        id='customSwitch1'
                                        onChange={handleChangeTheme}
                                    />
                                    <label
                                        className='custom-control-label loginS'
                                        htmlFor='customSwitch1'
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
                                        className='loginF loginS'
                                        placeholder='Enter Name'
                                        defaultValue={username}
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
                                        New Password
                                    </label>
                                    <input
                                        type='password'
                                        id='password'
                                        name='password'
                                        className='loginF loginS'
                                        placeholder='New Password'
                                        defaultValue={''}
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
                                        Confirm New Password
                                    </label>
                                    <input
                                        type='password'
                                        id='password2'
                                        name='password2'
                                        className='loginF loginS'
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
                                        className='loginF loginS'
                                        placeholder='Enter Email'
                                        defaultValue={emailAddress}
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
                                        className='loginF loginS'
                                        placeholder='Enter Email Password'
                                        defaultValue={emailPassword}
                                        onChange={(e) =>
                                            setEmailPassword(e.target.value)
                                        }
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='btn btn-info btn-block'
                                    onClick={() => handleSave()}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                open={saveSuccess}
                autoHideDuration={2000}
                onClose={handleSaveClose}
            >
                <Alert onClose={handleSaveClose} severity='success'>
                    Saved!
                </Alert>
            </Snackbar>
            <Snackbar
                open={saveFail.state}
                autoHideDuration={2000}
                onClose={handleSaveFailClose}
            >
                <Alert onClose={handleSaveFailClose} severity='error'>
                    {saveFail.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Settings
