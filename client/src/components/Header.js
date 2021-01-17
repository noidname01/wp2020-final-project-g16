import React, { useRef } from 'react'
import menu from '../images/menu.png'
import send from '../images/send.png'
import save from '../images/save.png'
import user from '../images/user.png'

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <>
            <div class='navbar navbar-expand navbar-dark background-dark'>
                <button
                    class='btn btn-default ml-0 mr-3'
                    type='button'
                    id='sidebarCollapse'
                >
                    <img
                        src={menu}
                        width='20'
                        height='20'
                        class='d-inline-block'
                        alt=''
                    />
                </button>
                <div
                    class='collapse navbar-collapse container-fluid'
                    id='navbarSupportedContent'
                >
                    <ul class='navbar-nav mr-auto'>
                        <li class='nav-item active'>
                            <a class='nav-link' href='#'>
                                Editor <span class='sr-only'>(current)</span>
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>
                                Table
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>
                                Preview
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link disabled' href='#'>
                                Send
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
//onClick={() => setMenuOpen(!menuOpen)}
