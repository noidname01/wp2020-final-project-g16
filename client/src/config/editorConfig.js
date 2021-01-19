const HelloButton = function (context) {
    var ui = $.summernote.ui

    // create button
    var button = ui.button({
        contents: '<i class="fa fa-hello"/> Hello',
        tooltip: 'hello',
        click: function () {
            // invoke insertText method with 'hello' on editor module.
            context.invoke('editor.insertText', 'hello')
        },
    })

    return button.render() // return button as jquery object
}

const VarButton = function (context) {
    var ui = $.summernote.ui

    // create button
    var button = ui.button({
        contents: '<i class="fa fa-var"/> Var',
        tooltip: 'var',
        click: function () {
            // invoke insertText method with 'hello' on editor module.
            context.invoke('editor.insertNode', 'Var')
        },
    })

    return button.render() // return button as jquery object
}

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
        ['mybutton', ['hello']],
    ],
    buttons: {
        hello: HelloButton,
        var: VarButton,
    },
}

export { editorConfig }
