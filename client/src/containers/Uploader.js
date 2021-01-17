import { useState } from 'react'
import './Uploader.css'
import { getFileByInput, getFileErrorHandler } from './GetFile'

function Uploader(props) {
    function handleFileSelected(ev: React.ChangeEvent<HTMLInputElement>): void {
        try {
            props.getFile(getFileByInput(ev))
        } catch {
            getFileErrorHandler()
        }
    }

    return (
        <div>
            <input
                type='file'
                id='upload-input'
                className='upload-input'
                onChange={(ev) => handleFileSelected(ev)}
            />
        </div>
    )
}

export default Uploader
