import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'

export default function Menu({ menuOpen }) {
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
                            <Link className='nav-link profile' to='/profile'>
                                <img
                                    src={user}
                                    height='30'
                                    className='d-inline-block pr-4'
                                    alt=''
                                />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className='nav-link'
                                to={{
                                    pathname: '/editor/new',
                                    state: {
                                        defaultValue: 'Start Writing!',
                                    },
                                }}
                            >
                                New
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/draft'>
                                Draft
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/template'>
                                Template
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='sent'>
                                Sent
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/settings'>
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
