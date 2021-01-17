const editorConfig = {
    // reference:https://summernote.org/deep-dive/#initialization-options
    lang: 'zh-TW',
    height: 350,
    dialogsInBody: true,
    toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        [('fontname', ['fontname'])],
        ['para', ['ul', 'ol', 'paragraph']],
        // ['table', ['table']],
        // ['insert', ['link', 'picture', 'video']],
        ['view', ['undo', 'redo']],
    ],
}

export { editorConfig }
