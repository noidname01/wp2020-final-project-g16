import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Body from '../components/Body'
import '../bootstrap.css'
import '../sidebar.css'

// https://codepen.io/maximakymenko/pen/aboWJpX/

function App() {
    const menuIcon = useRef()
    const [menuOpen, setMenuOpen] = useState(true)
    return (
        <div className='editor'>
            <div className='row'>
                <div className='col-2'>
                    <Menu menuOpen={menuOpen} />
                </div>
                <div className='col'>
                    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <div>helooo</div>
                </div>
            </div>
        </div>
    )
}

export default App
