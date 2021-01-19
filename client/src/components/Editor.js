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
import { re } from '../config/parserConfig'
// ===== import config ====

import parse from 'html-react-parser'

const Editor = (props) => {
    // const { state } = useParams()
    //const location = useLocation()

    let { html, idCounter } = props
    const { setHtml, setIdCounter, setSubject } = props

    const [nodes, setNodes] = useState([])
    // const

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const renderTemplate = (html) => {
        //TODO

        let texts = html.split(re)

        let inputs = html.match(re)

        inputs = inputs.map((input) => {
            let varname = input.match(/name="([\w]*)"/m)[1]
            return input.replace(
                /defaultvalue="[\w]*"/gm,
                `defaultvalue="${varname}"`
            )
        })

        // console.log('inputs', inputs)

        html = ''

        for (let i = 0; i < inputs.length; i++) {
            html += texts[i]
            html += inputs[i]
        }

        html += texts[texts.length - 1]

        // console.log('combine', html)

        let domparser = new DOMParser()
        let doc = domparser.parseFromString(html, 'text/html')
        let children = doc.body.children

        setNodes(children)
    }

    const handleEditorChange = (content) => {
        setHtml(content)
    }

    const handleVarChange = async (e) => {
        let newVarName = e.target.value

        // console.log(newVarName)
        let text = ctx.measureText(newVarName)

        e.target.name = newVarName
        e.target.defaultValue = newVarName

        e.target.style.width = `calc( 4.5rem + 1.2 * ${text.width + 1 + 'px'})`
    }
    // =======Test Ugly method ==========
    const createTag = (bgColor, varname, id) => {
        let newVar = document.createElement('input')
        newVar.setAttribute('class', 'btn')
        newVar.setAttribute('id', id ? id : idCounter)
        newVar.style.backgroundColor = bgColor
        newVar.style.color = 'white'
        newVar.style.width = '6rem'
        newVar.setAttribute('placeholder', '$Var')
        // newVar.setAttribute('defaultValue', varname ? varname : '')
        newVar.setAttribute('name', varname ? varname : '')

        newVar.oninput = handleVarChange

        return newVar
    }
    // =======Test Ugly method ==========

    const handleClick = async (e) => {
        e.preventDefault()
        ReactSummernote.insertNode(createTag('#123456'))

        setIdCounter((state) => state + 1)
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    useEffect(() => {
        if (html) {
            // props.setHtml(html)
            // console.log('html component did mount \n', html)
            renderTemplate(html)
        }
    }, [])

    /* useEffect(() => {
        console.log('html update \n', html)
    }, [html]) */

    return (
        <div className='newAnimation'>
            <form className='mx-2'>
                <div className='form-group flex-row'>
                    <label
                        htmlFor='inputSubject'
                        className='col-sm-1 col-form-label'
                    >
                        Subject:
                    </label>
                    <div className='col-sm-10'>
                        <input
                            type='text'
                            className='emailform'
                            id='inputSubject'
                            onChange={handleSubjectChange}
                        />
                    </div>
                    <button
                        className='col btn btn-light btn-sm'
                        onClick={handleClick}
                    >
                        Test
                    </button>
                    <Link
                        to={{
                            pathname: '/excel',
                        }}
                    >
                        <button className='col btn btn-light btn-sm'>
                            Next
                        </button>
                    </Link>
                </div>
            </form>
            <ReactSummernote
                //value={location.state.defaultValue}
                options={editorConfig}
                onChange={handleEditorChange}
                className='summernote'
            >
                {html ? parse(html) : null}
            </ReactSummernote>
        </div>
    )
}

export default Editor
