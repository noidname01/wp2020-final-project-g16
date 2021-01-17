import React, { useRef } from 'react'
import menu from '../images/menu.png'
import send from '../images/send.png'
import save from '../images/save.png'
import user from '../images/user.png'

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <>
            <nav class='navbar navbar-expand navbar-dark background-dark'>
                <a class='navbar-brand col-md-1' href='#'>
                    <button
                        class='btn btn-default mr-sm-0'
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
                </a>
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
            </nav>
        </>
    )
}
//onClick={() => setMenuOpen(!menuOpen)}
