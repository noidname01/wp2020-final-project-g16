import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import menu from '../images/menu.png'
import next from '../images/next.png'

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <>
            <div className='navbar navbar-expand navbar-dark background-dark'>
                <div
                    className='collapse navbar-collapse container-fluid'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item flex-row'>
                            <Link className='nav-link' to='/editor'>
                                Editor
                            </Link>
                            <img
                                src={next}
                                width='10'
                                height='10'
                                className='flex mx-1'
                                alt=''
                            />
                            <Link className='nav-link' to='/excel'>
                                Table
                            </Link>
                            <img
                                src={next}
                                width='10'
                                height='10'
                                className='flex mx-1'
                                alt=''
                            />
                            <Link className='nav-link ' to='/preview'>
                                Preview
                            </Link>
                            <img
                                src={next}
                                width='10'
                                height='10'
                                className='flex mx-1'
                                alt=''
                            />
                            <Link className='nav-link disabled' to='/send'>
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
