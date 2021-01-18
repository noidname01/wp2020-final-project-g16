import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import menu from '../images/menu.png'
import next from '../images/next.png'
import './Header.css'

export default function Header(props) {
    const getImage = () => {
        return (
            <img
                src={next}
                width='10'
                height='10'
                className='flex mx-1'
                alt=''
            />
        )
    }
    const createBtn = (title) => {
        return (
            <button
                type='button'
                className='header-button'
                key={title}
                onClick={() => {
                    props.setStep(title)
                }}
            >
                <span className='nav-link'>{title}</span>
            </button>
        )
    }

    return (
        <>
            <div className='navbar navbar-expand navbar-dark background-dark'>
                <div
                    className='collapse navbar-collapse container-fluid'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item flex-row'>
                            {props.titleList.map((title, id) => {
                                let result = []
                                if (id !== 0) {
                                    result.push(getImage())
                                }
                                result.push(createBtn(title))
                                return result
                            })}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
//onClick={() => setMenuOpen(!menuOpen)}
