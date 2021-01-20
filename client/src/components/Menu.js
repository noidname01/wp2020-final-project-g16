import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'
import { images } from './Animals'

export default function Menu(props) {
    let { menuOpen, userInfo } = props

    console.log(images[0])
    return (
        <>
            <div className='wrapper'>
                <nav
                    id='sidebar'
                    className={
                        menuOpen
                            ? 'navbar-light bg-light'
                            : 'navbar-light bg-light active'
                    }
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <div className=' profile' to='/ee/profile'>
                                <img
                                    // src={images[Math.floor(Math.random() * 71)]}
                                    src={images[0].default}
                                    height='30'
                                    className='d-inline-block pr-4'
                                    alt=''
                                />
                                <span>{userInfo.username}</span>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className='nav-link'
                                to={{
                                    pathname: '/ee/new',
                                }}
                            >
                                New
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/ee/draft'>
                                Draft
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/ee/template'>
                                Template
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/ee/sent'>
                                Sent
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/ee/settings'>
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
