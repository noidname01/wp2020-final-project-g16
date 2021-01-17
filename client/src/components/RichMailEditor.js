import React from 'react'
import ReactSummernote from 'react-summernote'
import 'react-summernote/dist/react-summernote.css' // import styles
import 'react-summernote/lang/summernote-zh-TW' // you can import any other locale

import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/tooltip'
import 'bootstrap/dist/css/bootstrap.css'

const RichTextEditor = () => {
    const onChange = (content) => {
        console.log('onChange', content)
    }

    const handleClick = (e) => {
        e.preventDefault()
        ReactSummernote.insertNode(<p>XD</p>)
    }

    return (
        <>
            <ReactSummernote
                value='Default value'
                options={{
                    lang: 'zh-TW',
                    height: 350,
                    dialogsInBody: true,
                    toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'underline', 'clear']],
                        ['fontname', ['fontname']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['table', ['table']],
                        ['insert', ['link', 'picture', 'video']],
                        ['view', ['fullscreen', 'codeview']],
                    ],
                }}
                onChange={onChange}
            ></ReactSummernote>
            <button onClick={handleClick}>Test</button>
        </>
    )
}

export default RichTextEditor
