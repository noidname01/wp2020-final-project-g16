import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//import Header from '../components/Header2'
import Menu from '../components/Menu'
import Body from '../components/Body'
import '../bootstrap.css'
import Routes from '../routes/Routes'

// https://codepen.io/maximakymenko/pen/aboWJpX/

function App() {
    const menuIcon = useRef()
    const [menuOpen, setMenuOpen] = useState(true)
    const location = useLocation()
    const [userinfo, setUserinfo] = useState('')

    useEffect(() => {
        setUserinfo(location.state.userinfo)
    }, [])
    return (
        <div className='flex-container-main'>
            <div className='flex'>
                <Menu menuOpen={menuOpen} />
            </div>
            <div className='flex w100'>
                <div className='main w100'>
                    <div className='editArea'>
                        <Routes userinfo={userinfo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
