import React, { useState } from 'react'
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

const RichTextEditor = () => {
    /* const onChange = (content) => {
        console.log('onChange', content)

    } */
    let varList = []
    let idCouter = 0
    /* format
    {
        id:
        varname:
    }
     */

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const handleEditorChange = (content) => {
        console.log('onChange', content)
    }

    const handleVarChange = (e) => {
        let newVarName = e.target.value

        console.log(newVarName)
        let text = ctx.measureText(newVarName)

        // console.log(varList)

        let newVarList = varList
        console.log(e.target.id)
        console.log(newVarList)
        newVarList[e.target.id].varname = newVarName
        setVarList(newVarList)
        // console.log(text.width)
        e.target.style.width = `calc( 4.5rem + 1.2 * ${text.width + 1 + 'px'})`
    }
    // =======Test Ugly method ==========
    const createTag = (bgColor) => {
        // let container = document.createElement('div')
        // container.setAttribute('class', 'btn')
        // container.style.backgroundColor = bgColor
        // container.style.display = 'inline-flex'

        let newVar = document.createElement('input')
        // newVar.setAttribute()
        newVar.setAttribute('class', 'btn')
        newVar.setAttribute('id', idCounter)
        newVar.style.backgroundColor = bgColor
        // newVar.style.fontSize = '1'
        newVar.style.color = 'white'
        newVar.style.width = '6rem'
        newVar.setAttribute('placeholder', '$Var')

        newVar.oninput = handleVarChange

        // container.appendChild(newVar)

        setVarList((state) => [
            ...state,
            {
                id: idCounter,
                varname: '',
            },
        ])

        setIdCouter(idCounter + 1)

        return newVar
    }
    // =======Test Ugly method ==========

    const handleClick = (e) => {
        e.preventDefault()
        ReactSummernote.insertNode(createTag('pink'))
    }

    return (
        <>
            <ReactSummernote
                value='Default value'
                // options={{
                //     lang: 'zh-TW',
                //     height: 350,
                //     dialogsInBody: true,
                //     toolbar: editorConfig,
                // }}
                options={editorConfig}
                onChange={handleEditorChange}
            ></ReactSummernote>
            <button onClick={handleClick}>Test</button>
        </>
    )
}

export default RichTextEditor
