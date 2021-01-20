import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//import Header from '../components/Header2'
import Menu from '../components/Menu'
import Body from '../components/Body'
import '../bootstrap.css'
import Routes from '../routes/Routes'

import { userInfoTemplate } from '../config/parserConfig'

// https://codepen.io/maximakymenko/pen/aboWJpX/

function App() {
    const menuIcon = useRef()
    const [menuOpen, setMenuOpen] = useState(true)
    const location = useLocation()
    const [userinfo, setUserinfo] = useState({})

    const getUserInfoFromLocalStorage = () => {
        let newUserInfo = {}

        Object.keys(userInfoTemplate).forEach((info) => {
            newUserInfo[info] = localStorage.getItem(info)
        })

        console.log(newUserInfo)

        return newUserInfo
    }

    useEffect(() => {
        setUserinfo(
            location.state
                ? location.state.userinfo
                : getUserInfoFromLocalStorage()
        )
        return () => {
            localStorage.clear()
        }
    }, [])
    return (
        <div className='frame'>
            <div className='frameL'>
                <Menu menuOpen={menuOpen} userInfo={userinfo} />
            </div>
            <div className='frameR'>
                <Routes userinfo={userinfo} />
            </div>
        </div>
    )
}

export default App
