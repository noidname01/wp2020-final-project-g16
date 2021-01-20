import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//import Header from '../components/Header2'
import Body from '../components/Body'
import '../bootstrap.css'
import Routes from '../routes/Routes'
import { Link } from 'react-router-dom'
import user from '../images/user.png'
import { CardDeck } from 'react-bootstrap'

const Menu = () => {
    return (
        <div className='navbar-light bg-light'>
            <ul className='navbar-nav'>
                <li className='profile'>
                    <img
                        src={user}
                        height='30'
                        className='d-inline-block pr-4'
                        alt=''
                    />
                    User
                </li>
                <li className='menu-item'>
                    <Link
                        className='nav-link'
                        to={{
                            pathname: '/ee/new',
                        }}
                    >
                        New
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link className='nav-link' to='/ee/draft'>
                        Draft
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link className='nav-link' to='/ee/template'>
                        Template
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link className='nav-link' to='/ee/sent'>
                        Sent
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link className='nav-link' to='/ee/settings'>
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const Card = () => {
    return (
        <div className='grid-col'>
            <div className='card flex-card border-secondary mb-3'>
                <div className='card-header' style={{ color: 'black' }}>
                    Header
                </div>
                <div className='card-body text-secondary'>
                    <h5 className='card-title'>name</h5>
                    <p className='card-text'>des</p>
                </div>
            </div>
        </div>
    )
}

const Draft = () => {
    return (
        <div className='grid frameIn2'>
            <div className='flex-row'>
                <Card />
                <Card />
            </div>
        </div>
    )
}

const Test = () => {
    return (
        <div className='frame'>
            <div className='frameL'>
                <Menu></Menu>
            </div>
            <div className='frameR'>
                <div className='frameUp'>New</div>
                <div className='frameDown'>
                    <Draft></Draft>
                </div>
            </div>
        </div>
    )
}

export default Test

{
    /* <Header></Header>
<div className='frameIn'>Space</div> */
}
