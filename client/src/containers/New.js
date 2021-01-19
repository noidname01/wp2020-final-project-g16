import React, { useState } from 'react'
import Editor from '../components/Editor'
import Excel from '../components/Excel'
import Preview from '../components/Preview'
import Header from '../components/Header2'
import Send from '../components/Send'

const New = (props) => {
    const { userInfo } = props

    const [step, setStep] = useState('Editor') // Editor, Excel, Preview, Send
    const titleList = ['Editor', 'Excel', 'Preview', 'Send']
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

    return (
        <React.Fragment>
            <Header setStep={(e) => setStep(e)} titleList={titleList}></Header>

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
