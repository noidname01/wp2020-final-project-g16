import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'

export default function Menu({ menuOpen }) {
    return (
        <>
            <div class='wrapper'>
                <nav
                    id='sidebar'
                    class={
                        menuOpen
                            ? 'navbar-light bg-light'
                            : 'navbar-light bg-light active'
                    }
                >
                    <ul class='navbar-nav mr-auto'>
                        <li class='nav-item'>
                            <Link class='nav-link profile' to='/profile'>
                                <img
                                    src={user}
                                    height='30'
                                    class='d-inline-block pr-4'
                                    alt=''
                                />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link class='nav-link' to='/'>
                                New
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link class='nav-link' href='/draft'>
                                Draft
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link class='nav-link' href='/template'>
                                Template
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link class='nav-link' href='sent'>
                                Sent
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link class='nav-link' href='/settings'>
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
