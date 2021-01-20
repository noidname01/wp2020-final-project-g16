import React from 'react'
import { Link } from 'react-router-dom'
import mail from '../images/mail-send.png'

const Welcome = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-4 m-auto'>
                    <div className='card card-body text-center ca'>
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
    )
}

export default Welcome
