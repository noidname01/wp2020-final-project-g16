import React, { useState } from 'react'
import Editor from '../components/Editor'
import Excel from '../components/Excel'
import Preview from '../components/Preview'
import Header from '../components/Header2'

const New = () => {
	const [step, setStep] = useState('Editor') // Editor, Excel, Preview, Send
	const titleList = ['Editor', 'Excel', 'Preview', 'Send']

	return (
		<React.Fragment>
			<Header setStep={(e) => setStep(e)} titleList={titleList}></Header>

			{step === 'Editor' ? <Editor></Editor> : <div></div>}
			{step === 'Excel' ? <Excel></Excel> : <div></div>}
			{step === 'Preview' ? <Preview></Preview> : <div></div>}
			{step === 'Send' ? <div></div> : <div></div>}
		</React.Fragment>
	)
}

export default New
