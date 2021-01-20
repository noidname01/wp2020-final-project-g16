import React, { useEffect } from 'react'
import ReactDataSheet from 'react-datasheet'
import ExcelJs from 'exceljs'
import { saveAs } from 'file-saver'
// import { useLocation } from 'react-router-dom'
import './Excel.css'

// import { re } from '../config/parserConfig'

const MAX_RECEIVERS = 11

function createComponent(e) {
    return (
        <div
            style={{
                color: e.color,
                fontWeight: 'bold',
                height: '30px',
                alignContent: 'center',
            }}
        >
            {e.varname}
        </div>
    )
}

function arraysEqual(a, b) {
    if (a === b) return true
    if (a == null || b == null) return false
    if (a.length !== b.length) return false
    for (var i = 0; i < a.length; ++i) {
        if (a[i].value !== b[i].value) return false
    }
    return true
}

function createSht(sht) {
    let result = []

    const colNumber = sht[0].length
    //console.log('colNumber: ' + colNumber)
    let emptyRow = []
    for (let i = 0; i < colNumber; i++) {
        emptyRow.push({ value: '' })
    }
    for (let i = 0; i < MAX_RECEIVERS; i++) {
        if (sht[i] !== undefined) {
            result.push(sht[i])
        } else {
            result.push(emptyRow)
        }
    }
    //console.log(result)
    return result
}

function createSht2(row0, grid, getGridValue) {
    let result = []
    let sht = [row0]
    const colNumber = sht[0].length
    //console.log('colNumber: ' + colNumber)
    const newTitles = row0.map((e) => e.value)

    for (let i = 0; i < MAX_RECEIVERS; i++) {
        let newRow = newTitles.map((e) => {
            let cell = getGridValue(i, e)

            if (cell === undefined) {
                cell = ''
            }

            return { value: cell }
        })

        if (sht[i] !== undefined) {
            result.push(sht[i])
        } else {
            result.push(newRow)
        }
    }
    //console.log(result)
    return result
}
async function saveAsExcel(filename, grid) {
    const wb = new ExcelJs.Workbook()

    const ws = wb.addWorksheet()

    const row = ws.addRow(grid[0].map((r) => r.value))
    row.font = { bold: true }

    for (let i = 1; i < grid.length; i++) {
        const row = ws.addRow(grid[i].map((r) => r.value))
    }

    const buf = await wb.xlsx.writeBuffer()

    saveAs(new Blob([buf]), `${filename}.xlsx`)
}

function EditableTable(props) {
    //const [grid, setGrid] = useState([])
    // const location = useLocation()

    const { titles, grid } = props

    useEffect(async () => {
        if (props.html === undefined) {
            return
        }

        if (grid.length === 0) {
            let row0 = titles.map((e) => {
                return {
                    value: e.varname,
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent(e),
                }
            })
            row0 = [
                {
                    value: 'Email_Address',
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: 'Email_Address',
                        color: 'black',
                    }),
                },
                ...row0,
            ]
            props.setGrid(createSht([row0]))
        } else {
            // The grid has been created

            let row0 = titles.map((e) => {
                return {
                    value: e.varname,
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent(e),
                }
            })
            row0 = [
                {
                    value: 'Email_Address',
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: 'Email_Address',
                        color: 'black',
                    }),
                },
                ...row0,
            ]
            let sheet = createSht2(row0, grid, props.getGridValue)

            props.setGrid(sheet)
        }
    }, [])

    const getFile = (f) => {
        const wb = new ExcelJs.Workbook()
        const reader = new FileReader()
        let sht = []
        reader.readAsArrayBuffer(f)
        reader.onload = () => {
            const buffer = reader.result
            wb.xlsx.load(buffer).then((_workbook) => {
                _workbook.eachSheet((sheet, sheetID) => {
                    sheet.eachRow((row, rowID) => {
                        let rows = row.values
                            .filter((c, cID) => cID > 0)
                            .map((cell, cellID) => {
                                let txt = ''
                                let cellDict = null
                                if (cell.text !== undefined) {
                                    txt = cell.text
                                } else {
                                    txt = cell
                                }
                                if (rowID === 1) {
                                    cellDict = { value: txt, readOnly: true }
                                } else {
                                    cellDict = { value: txt }
                                }
                                return cellDict
                            })
                        sht.push(rows)
                    })
                })
                if (arraysEqual(sht[0], props.grid[0])) {
                    props.setGrid(createSht(sht))
                } else {
                    alert('Not Matched')
                }
            })
        }
    }

    const handleFileInput = (ev) => {
        getFile(ev.target.files[0])
    }

    const handleDraft = () => {
        console.log('handleDraft')
    }

    return (
        <div className='w100'>
            <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
            >
                <div className='flex modal-dialog vh100 yCen' role='document'>
                    <div className='flex modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Create Draft
                            </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'
                            >
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <p className='text-dark'>Name: </p>
                            <input
                                className='input-group-text'
                                placeholder='Name your new draft'
                            ></input>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                            <button
                                type='button'
                                className='btn btn-info'
                                onClick={handleDraft}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='newAnimation'>
                <div className='flex-row'>
                    <div className='col-sm-3 custom-file excelfile flex'>
                        <input
                            type='file'
                            className='custom-file-input input-sm'
                            id='inputGroupFile01'
                            aria-describedby='inputGroupFileAddon01'
                            onChange={(ev) => handleFileInput(ev)}
                        />
                        <label
                            className='custom-file-label'
                            htmlFor='inputGroupFile01'
                        >
                            未選擇任何檔案
                        </label>
                    </div>
                    <div className='col'></div>
                    <button
                        className='col-sm-1 btn btn-light btn-sm'
                        type='button'
                        id='inputGroupFileAddon04'
                        onClick={() => saveAsExcel('Temp', props.grid)}
                    >
                        Save
                    </button>
                    <button
                        className='col-sm-2 btn btn-info btn-sm'
                        type='button'
                        data-toggle='modal'
                        data-target='#exampleModal'
                    >
                        Save as Draft
                    </button>
                </div>

                <ReactDataSheet
                    data={props.grid}
                    valueRenderer={(cell) => cell.value}
                    onCellsChanged={(changes) => {
                        const temp = props.grid.map((row) => [...row])
                        changes.forEach(({ cell, row, col, value }) => {
                            temp[row][col] = { ...temp[row][col], value }
                        })
                        props.setGrid(temp)
                    }}
                />
            </div>
        </div>
    )
}

export default EditableTable
