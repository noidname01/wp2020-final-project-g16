import React, { useRef } from 'react'

import EmailEditor from 'react-email-editor'

const HTMLEmailEditor = (props) => {
    const emailEditorRef = useRef(null)

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data
            console.log(html) // for test
        })
    }

    const onLoad = () => {} // load custom template

    return (
        <div>
            <div>
                <button onClick={exportHtml}>Export HTML</button>
            </div>

            <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
        </div>
    )
}

export default HTMLEmailEditor
