import React from 'react'
import { Link } from 'react-router-dom'
import mail from '../images/mail-send.png'

const Welcome = () => {
    return (
        <div className='frame xCen yCen welcomebg'>
            <div className='frameW'>
                <h1 className='display-4'>EEMAIL</h1>
                <p className='lead'>
                    EEMail allows you to send mass emails to multiple recipients
                    at once. <br />
                    You can personalize each email with ease by uploading an
                    excel file and make changes with our online editing tool.
                    Additionaly, we provide you a database to save your current
                    project as a template.
                </p>
                <hr className='my-4' />
                <Link
                    className='btn btn-info btn-lg start rounded-pill'
                    to='/login'
                >
                    Get started
                </Link>
            </div>
        </div>
    )
}

export default Welcome

{
    /* <div className='frame xCen yCen'>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-md-5 m-auto'>
                        <div className='card card-body text-center'>
                            <img src={mail} className='m-auto'></img>
                            <h1 className='display-5'>EEMAIL</h1>
                            <p>Create an account or login</p>
                            <Link
                                className='nav-link btn btn-info btn-block'
                                to='/login'
                            >
                                Login
                            </Link>
                            <Link
                                className='nav-link btn btn-outline-info btn-block'
                                to='/register'
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> */
}
