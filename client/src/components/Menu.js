import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { images_dark, images_light } from './Animals'

export default function Menu(props) {
    let { userInfo } = props
    useEffect(() => {})
    return (
        <div className='navbar-light bg-light'>
            <ul className='navbar-nav'>
                <li className='profile'>
                    <img
                        src={
                            localStorage.getItem('mode') === 'dark'
                                ? images_dark[Math.floor(Math.random() * 71)]
                                      .default
                                : images_light[Math.floor(Math.random() * 71)]
                                      .default
                        }
                        height='50'
                        className='d-inline-block pr-4'
                        alt=''
                    />
                    <span style={{ color: 'var(--dark)' }}>
                        {userInfo.username}
                    </span>
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
