import React, { useEffect, useState } from 'react'
import Editor from '../components/Editor'
import Excel from '../components/Excel'
import Preview from '../components/Preview'
import Header from '../components/Header2'
import Send from '../components/Send'

import { re } from '../config/parserConfig'

import { useLocation } from 'react-router-dom'

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

    const location = useLocation()

    const [step, setStep] = useState('Editor') // Editor, Excel, Preview, Send
    const [titleList, setTitleList] = useState([
        { name: 'Editor', status: 'current' },
        { name: 'Excel', status: 'available' },
        { name: 'Preview', status: 'unavailable' },
        { name: 'Send', status: 'unavailable' },
    ])
    const [html, setHtml] = useState(location.state ? location.state.html : '')
    const [grid, setGrid] = useState([])
    const [idCounter, setIdCounter] = useState(0)
    const [subject, setSubject] = useState('')
    const [varList, setVarList] = useState([])
    const [presend, setPresend] = useState([])
    /*
        grid = [
            [{value: }, {value: }, {value: }],
            [{value: }, {value: }, {value: }],
            [{value: }, {value: }, {value: }],
            [{value: }, {value: }, {value: }],
            [{value: }, {value: }, {value: }],
        ]
    */
    const parser = (html) => {
        let matches_array = html.match(re)
        console.log(matches_array)

        if (!matches_array) {
            return []
        }

        let varList = matches_array.map((input) => {
            return {
                id: input.match(/id="([0-9]*)"/m)[1],
                varname: input.match(/name="([\w]*)"/m)[1],
                color: input.match(/background-color: (rgb\([0-9, ]*\))/m)
                    ? input.match(/background-color: (rgb\([0-9, ]*\))/m)[1]
                    : 'gray',
            }
        })
        //console.log(varList)
        return varList
    }

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
        const [check, nonEmpty, nonSame] = checkVarList()

        if (check) {
            setStep(step)
            setTitleList(createHeaderList(step))
        } else {
            if (!nonEmpty) {
                alert("The variable can't not be empty!!")
            }
            if (!nonSame) {
                alert("You can't have same variable!!")
            }
        }
    }

    const checkVarList = () => {
        // console.log(varList)

        const nonEmpty = varList.every((vari) => {
            return vari.varname !== ''
        })

        const set1 = new Set(varList.map((vari) => vari.varname))

        // console.log(set1)

        const nonSame = varList.length === set1.size

        // console.log('nonEmpty, nonSame', nonEmpty, nonSame)

        return [nonEmpty && nonSame, nonEmpty, nonSame]
    }

    useEffect(() => {
        setVarList(parser(html))
    }, [html])

    return (
        <>
            <div className='frameUp'>New</div>
            <div className='frameDown'>
                <div className='frameIn'>
                    <Header
                        setStep={headerSetStep}
                        titleList={titleList}
                    ></Header>

                    {step === 'Editor' ? (
                        <Editor
                            setHtml={setHtml}
                            html={html}
                            idCounter={idCounter}
                            setIdCounter={setIdCounter}
                            subject={subject}
                            setSubject={setSubject}
                            userInfo={userInfo}
                        ></Editor>
                    ) : (
                        <div></div>
                    )}
                    {step === 'Excel' ? (
                        <Excel
                            html={html}
                            setGrid={setGrid}
                            grid={grid}
                            // setVarList={setVarList}
                            titles={varList}
                            getGridValue={getGridValue}
                            userInfo={userInfo}
                        ></Excel>
                    ) : (
                        <div></div>
                    )}
                    {step === 'Preview' ? (
                        <Preview
                            subject={subject}
                            html={html}
                            userInfo={userInfo}
                            varList={varList}
                            getGridValue={getGridValue}
                            presend={presend}
                            setPresend={setPresend}
                        ></Preview>
                    ) : (
                        <div></div>
                    )}
                    {step === 'Send' ? (
                        <Send
                            userInfo={userInfo}
                            presend={presend}
                            getGridValue={getGridValue}
                            subject={subject}
                        ></Send>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </>
    )
}

export default New
