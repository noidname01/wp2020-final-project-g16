import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import menu from '../images/menu.png'
import send from '../images/send.png'
import save from '../images/save.png'
import user from '../images/user.png'

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <>
            <div className='navbar navbar-expand navbar-dark background-dark'>
                <button
                    className='btn btn-default ml-0 mr-3'
                    type='button'
                    id='sidebarCollapse'
                >
                    <img
                        src={menu}
                        width='20'
                        height='20'
                        className='d-inline-block'
                        alt=''
                    />
                </button>
                <div
                    className='collapse navbar-collapse container-fluid'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/editor'>
                                Editor
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/excel'>
                                Table
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/preview'>
                                Preview
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/send'>
                                Send
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
//onClick={() => setMenuOpen(!menuOpen)}
