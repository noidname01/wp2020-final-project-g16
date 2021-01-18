import React, { useState, useEffect, useRef } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import ReactSummernote from 'react-summernote'
import 'react-summernote/dist/react-summernote.css' // import styles
import 'react-summernote/lang/summernote-zh-TW' // you can import any other locale

import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/tooltip'
import 'bootstrap/dist/css/bootstrap.css'

// ===== import config ====
import { editorConfig } from '../config/editorConfig'
// ===== import config ====

const Editor = (props) => {
    // const { state } = useParams()
    const location = useLocation()
    const [html, setHtml] = useState('')
    const [idCounter, setIdCounter] = useState(0)

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const handleEditorChange = (content) => {
        console.log('onChange', content)
        // html = content
        setHtml(content)
    }

    const handleVarChange = async (e) => {
        let newVarName = e.target.value

        // console.log(newVarName)
        let text = ctx.measureText(newVarName)

        e.target.name = newVarName

        e.target.style.width = `calc( 4.5rem + 1.2 * ${text.width + 1 + 'px'})`
    }
    // =======Test Ugly method ==========
    const createTag = (bgColor) => {
        let newVar = document.createElement('input')
        newVar.setAttribute('class', 'btn')
        newVar.setAttribute('id', idCounter)
        newVar.style.backgroundColor = bgColor
        newVar.style.color = 'white'
        newVar.style.width = '6rem'
        newVar.setAttribute('placeholder', '$Var')

        newVar.oninput = handleVarChange

        return newVar
    }
    // =======Test Ugly method ==========

    const handleClick = async (e) => {
        e.preventDefault()
        ReactSummernote.insertNode(createTag('#123456'))

        setIdCounter((state) => state + 1)
    }

    return (
        <>
            <ReactSummernote
                value={location.state.defaultValue}
                options={editorConfig}
                onChange={handleEditorChange}
            ></ReactSummernote>
            <button onClick={handleClick}>Test</button>

            <Link
                to={{
                    pathname: '/excel',
                    state: {
                        html: html,
                    },
                }}
            >
                <button> Next</button>
            </Link>
        </>
    )
}

export default Editor
