


function getFileByInput(ev) {
    const files = Array.from(ev.target.files)
    console.log('file name:  ', files[0].name)
    return files[0]
}

function getFileErrorHandler() {
    console.error('There are some errors...')
    alert('There are some errors...')
}

export  {getFileByInput, getFileErrorHandler}