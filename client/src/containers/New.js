import React, { useState } from 'react'
import Editor from '../components/Editor'
import Excel from '../components/Excel'
import Preview from '../components/Preview'
import Header from '../components/Header2'
import Send from '../components/Send'

const createHeaderList = (step) => {
    if (step === 'Editor') {
        return [
            { name: 'Editor', status: 'current' },
            { name: 'Excel', status: 'available' },
            { name: 'Preview', status: 'unavailable' },
            { name: 'Send', status: 'unavailable' },
        ]
    } else if (step === 'Excel') {
        return [
            { name: 'Editor', status: 'available' },
            { name: 'Excel', status: 'current' },
            { name: 'Preview', status: 'available' },
            { name: 'Send', status: 'unavailable' },
        ]
    } else if (step === 'Preview') {
        return [
            { name: 'Editor', status: 'available' },
            { name: 'Excel', status: 'available' },
            { name: 'Preview', status: 'current' },
            { name: 'Send', status: 'available' },
        ]
    } else if (step === 'Send') {
        return [
            { name: 'Editor', status: 'available' },
            { name: 'Excel', status: 'available' },
            { name: 'Preview', status: 'available' },
            { name: 'Send', status: 'current' },
        ]
    }
}

const New = (props) => {
    const { userInfo } = props

    const [step, setStep] = useState('Editor') // Editor, Excel, Preview, Send
    const [titleList, setTitleList] = useState([
        { name: 'Editor', status: 'current' },
        { name: 'Excel', status: 'available' },
        { name: 'Preview', status: 'unavailable' },
        { name: 'Send', status: 'unavailable' },
    ])
    const [html, setHtml] = useState('')
    const [grid, setGrid] = useState([])
    const [idCounter, setIdCounter] = useState(0)
    const [subject, setSubject] = useState('')
    const [varList, setVarList] = useState([])
    /*
        grid = [
            [{value: }, {value: }, {value: }],
            [{value: }, {value: }, {value: }],
            [{value: }, {value: }, {value: }],
            [{value: }, {value: }, {value: }],
            [{value: }, {value: }, {value: }],
        ]
    */
    const getGridValue = (rowNum, varname) => {
        if (rowNum > 10 || rowNum < 1 || grid[0] === undefined) {
            return undefined
        }
        let colNum = grid[0].length
        let col = null
        for (let i = 0; i < colNum; i++) {
            if (grid[0][i].value === varname) {
                col = i
            }
        }
        if (col === null) {
            return undefined
        } else {
            return grid[rowNum][col].value
        }
    }

    const headerSetStep = (step) => {
        setStep(step)
        setTitleList(createHeaderList(step))
    }

    return (
        <React.Fragment>
            <Header setStep={headerSetStep} titleList={titleList}></Header>

            {step === 'Editor' ? (
                <Editor
                    setHtml={setHtml}
                    html={html}
                    idCounter={idCounter}
                    setIdCounter={setIdCounter}
                    setSubject={setSubject}
                ></Editor>
            ) : (
                <div></div>
            )}
            {step === 'Excel' ? (
                <Excel
                    html={html}
                    setGrid={setGrid}
                    grid={grid}
                    setVarList={setVarList}
                    getGridValue={getGridValue}
                ></Excel>
            ) : (
                <div></div>
            )}
            {step === 'Preview' ? (
                <Preview html={html} grid={grid} varList={varList}></Preview>
            ) : (
                <div></div>
            )}
            {step === 'Send' ? <Send userinfo={userinfo}></Send> : <div></div>}
        </React.Fragment>
    )
}

export default New
