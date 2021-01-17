import React from 'react'
import '../sidebar.css'
export default function Menu({ open }) {
    return (
        <>
            <div class='wrapper'>
                <nav id='sidebar' class='navbar-light bg-light'>
                    <ul class='navbar-nav mr-auto'>
                        <li class='nav-item active'>
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
