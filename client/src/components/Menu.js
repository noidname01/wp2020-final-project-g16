import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'
import { images } from './Animals'

export default function Menu(props) {
    let { userInfo } = props
    console.log(images[0])

    return (
        <div className='navbar-light bg-light'>
            <ul className='navbar-nav'>
                <li className='profile'>
                    <img
                        // src={images[Math.floor(Math.random() * 71)]}
                        src={images[0].default}
                        height='50'
                        className='d-inline-block pr-4'
                        alt=''
                    />
                    <span>{userInfo.username}</span>
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
