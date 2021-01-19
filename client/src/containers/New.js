import React, { useState } from 'react'
import Editor from '../components/Editor'
import Excel from '../components/Excel'
import Preview from '../components/Preview'
import Header from '../components/Header2'

const New = () => {
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
                ></Excel>
            ) : (
                <div></div>
            )}
            {step === 'Preview' ? (
                <Preview html={html} grid={grid} varList={varList}></Preview>
            ) : (
                <div></div>
            )}
            {step === 'Send' ? <div>fdsfds</div> : <div></div>}
        </React.Fragment>
    )
}

export default New
