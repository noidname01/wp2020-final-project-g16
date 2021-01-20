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

// GraphQL dependencies
import { useQuery, useMutation } from '@apollo/client'
import { CREATE_TEMPLATE } from '../graphql'
import { v4 as uuid_v4 } from 'uuid'
import timestamp from '../containers/Timestamp'

import { TwitterPicker } from 'react-color'

const Editor = (props) => {
    // const { state } = useParams()
    //const location = useLocation()
    // graphQL
    const [createTemplate] = useMutation(CREATE_TEMPLATE)
    const [saveName, setSaveName] = useState('')
    const [saveDescription, setSaveDescription] = useState('')

    let { html, idCounter, subject } = props
    const { setHtml, setIdCounter, setSubject } = props

    const [nodes, setNodes] = useState([])
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    // const

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const popover = {
        position: 'absolute',
        zIndex: '2',
    }
    const cover = {
        position: 'fixed',
        right: '0px',
        top: '5rem',
    }

    const renderTemplate = (html) => {
        //TODO

        try {
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
        } catch {}
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
        newVar.style.color = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--dark')
        newVar.style.width = '6rem'
        newVar.setAttribute('placeholder', '$Var')
        // newVar.setAttribute('defaultValue', varname ? varname : '')
        newVar.setAttribute('name', varname ? varname : '')

        newVar.oninput = handleVarChange

        return newVar
    }
    // =======Test Ugly method ==========

    /*  const handleClick = async (e) => {
        e.preventDefault()
        console.log(
            getComputedStyle(document.documentElement).getPropertyValue(
                '--light'
            )
        )
        ReactSummernote.insertNode(
            createTag(
                getComputedStyle(document.documentElement).getPropertyValue(
                    '--light'
                )
            )
        )

        setIdCounter((state) => state + 1)
    } */

    const handleCreateColorVar = (color, event) => {
        event.preventDefault()
        ReactSummernote.insertNode(createTag(color.hex))
        setIdCounter((state) => state + 1)
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    const handleTemplate = async () => {
        console.log('handleTemplate')
        if (saveName === '') {
            alert('Please name yout template')
            return
        } else if (html === '') {
            alert('The editor is empty!')
        }

        //try {
        await createTemplate({
            variables: {
                id: uuid_v4(),
                name: saveName,
                description: saveDescription,
                timestamp: timestamp(),
                userId: props.userInfo.id,
                content: html,
            },
        })
        //} catch {}
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
        <div className='w100'>
            <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
            >
                <div className='flex modal-dialog vh100 yCen' role='document'>
                    <div className='flex modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Create a Template
                            </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'
                                style={{ outline: 'none' }}
                            >
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <p className='text-dark'>Name: </p>
                            <input
                                className='input-group-text'
                                placeholder='Name your new template...'
                                style={{
                                    width: '80%',
                                    outline: 'none',
                                }}
                                onChange={(e) => setSaveName(e.target.value)}
                            ></input>
                            <p> </p>
                            <p className='text-dark'>Description: </p>
                            <input
                                className='input-group-text'
                                placeholder='Describe your template...'
                                style={{ width: '80%', outline: 'none' }}
                                onChange={(e) =>
                                    setSaveDescription(e.target.value)
                                }
                            ></input>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                            <button
                                type='button'
                                className='btn btn-info'
                                onClick={handleTemplate}
                                data-dismiss='modal'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='newAnimation'>
                <form className='mx-2'>
                    <div className='form-group flex-row'>
                        <label
                            htmlFor='inputSubject'
                            className='col-sm-1 col-form-label'
                        >
                            Subject:
                        </label>
                        <div className='col'>
                            <input
                                type='text'
                                className='emailform'
                                id='inputSubject'
                                defaultValue={subject}
                                onChange={handleSubjectChange}
                            />
                        </div>
                        {/* <button
                            className='col-sm-1 btn btn-light btn-sm'
                            onClick={handleClick}
                        >
                            Test
                        </button> */}
                        <button
                            className='col-sm-1 btn btn-light btn-sm'
                            onClick={(e) => {
                                e.preventDefault()
                                setDisplayColorPicker(!displayColorPicker)
                            }}
                        >
                            Pick Color
                        </button>
                        {displayColorPicker ? (
                            <div style={popover}>
                                <div
                                    style={cover}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setDisplayColorPicker(false)
                                    }}
                                >
                                    <TwitterPicker
                                        onChangeComplete={handleCreateColorVar}
                                    ></TwitterPicker>
                                </div>
                            </div>
                        ) : null}

                        <button
                            className='col-sm-2 btn btn-info btn-sm'
                            type='button'
                            data-toggle='modal'
                            data-target='#exampleModal'
                        >
                            Save as Template
                        </button>
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
        </div>
    )
}

export default Editor
