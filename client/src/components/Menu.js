import React from 'react'
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
                            <div class='nav-link profile' href='#'>
                                <img
                                    src={user}
                                    height='30'
                                    class='d-inline-block pr-4'
                                    alt=''
                                />
                                Profile
                            </div>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>
                                New
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>
                                Draft
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>
                                Template
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>
                                Sent
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
