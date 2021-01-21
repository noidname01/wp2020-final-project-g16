import React, { useEffect } from 'react'
import ReactDataSheet from 'react-datasheet'
import ExcelJs from 'exceljs'
import { saveAs } from 'file-saver'
import '../css/Excel.css'

import rgbToHex from './rgbToHex'

const MAX_RECEIVERS = 11
const FIRST_COLUMN_WIDTH = '8%'

function createComponent(e) {
    return (
        <div
            style={{
                marginTop: '0.8%',
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
    let emptyRow = []
    for (let i = 0; i < colNumber; i++) {
        emptyRow.push({ value: '' })
    }
    for (let i = 0; i < MAX_RECEIVERS; i++) {
        if (sht[i] !== undefined) {
            result.push([
                {
                    value: i === 0 ? '' : i,
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: i === 0 ? '' : i,
                        color: 'rgb(100,100,100)',
                    }),
                    width: FIRST_COLUMN_WIDTH,
                    color: 'rgb(100,100,100)',
                },
                ...sht[i],
            ])
        } else {
            result.push([
                {
                    value: i === 0 ? '' : i,
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: i === 0 ? '' : i,
                        color: 'rgb(100,100,100)',
                    }),
                    width: FIRST_COLUMN_WIDTH,
                    color: 'rgb(100,100,100)',
                },
                ...emptyRow,
            ])
        }
    }
    return result
}

function createSht3(sht, grid) {
    let result = []

    console.log(sht)

    const colNumber = sht[0].length - 1
    //console.log('colNumber: ' + colNumber)
    let emptyRow = []
    for (let i = 0; i < colNumber; i++) {
        emptyRow.push({ value: '' })
    }
    result.push(grid[0])
    for (let i = 1; i < MAX_RECEIVERS; i++) {
        if (sht[i] !== undefined) {
            sht[i].shift()
            console.log(sht[i])
            result.push([
                {
                    value: i === 0 ? '' : i,
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: i === 0 ? '' : i,
                        color: 'rgb(100,100,100)',
                    }),
                    width: FIRST_COLUMN_WIDTH,
                    color: 'rgb(100,100,100)',
                },
                ...sht[i],
            ])
        } else {
            result.push([
                {
                    value: i === 0 ? '' : i,
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: i === 0 ? '' : i,
                        color: 'rgb(100,100,100)',
                    }),
                    width: FIRST_COLUMN_WIDTH,
                    color: 'rgb(100,100,100)',
                },
                ...emptyRow,
            ])
        }
    }
    return result
}

function createSht2(row0, grid, getGridValue) {
    let result = []
    let sht = [row0]

    const newTitles = row0.map((e) => e.value)
    console.log(newTitles)

    for (let i = 0; i < MAX_RECEIVERS; i++) {
        let newRow = newTitles.map((e) => {
            let cell = getGridValue(i, e)

            if (cell === undefined) {
                cell = ''
            }

            return { value: cell }
        })

        if (sht[i] !== undefined) {
            result.push([
                {
                    value: i === 0 ? '' : i,
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: i === 0 ? '' : i,
                        color: 'rgb(100,100,100)',
                    }),
                    width: FIRST_COLUMN_WIDTH,
                    color: 'rgb(100,100,100)',
                },
                ...sht[i],
            ])
        } else {
            result.push([
                {
                    value: i === 0 ? '' : i,
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: i === 0 ? '' : i,
                        color: 'rgb(100,100,100)',
                    }),
                    width: FIRST_COLUMN_WIDTH,
                    color: 'rgb(100,100,100)',
                },
                ...newRow,
            ])
        }
    }
    return result
}
async function saveAsExcel(filename, grid) {
    const wb = new ExcelJs.Workbook()

    const ws = wb.addWorksheet()

    const row = ws.addRow(grid[0].map((r) => r.value))
    row.font = { bold: true }
    row.eachCell((cell, colNumber) => {
        if (grid[0][colNumber] !== undefined) {
            console.log('----------------------')
            console.log(grid[0][colNumber])
            console.log('----------------------')
            row.getCell(colNumber + 1).font = {
                color: { argb: 'FF' + rgbToHex(grid[0][colNumber].color) },
            }
        }
    })

    for (let i = 1; i < grid.length; i++) {
        const row = ws.addRow(grid[i].map((r) => r.value))
    }

    const buf = await wb.xlsx.writeBuffer()

    saveAs(new Blob([buf]), `${filename}.xlsx`)
}

function EditableTable(props) {
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
                    color: e.color,
                }
            })
            row0 = [
                {
                    value: 'EMAIL_ADDRESS',
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: 'EMAIL_ADDRESS',
                        color: 'rgb(0,0,0)',
                    }),
                    color: 'rgb(0,0,0)',
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
                    color: e.color,
                }
            })
            row0 = [
                {
                    value: 'EMAIL_ADDRESS',
                    readOnly: true,
                    forceComponent: true,
                    component: createComponent({
                        varname: 'EMAIL_ADDRESS',
                        color: 'rgb(0,0,0)',
                    }),
                    color: 'rgb(0,0,0)',
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
                    props.setGrid(createSht3(sht, props.grid))
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
                    <div className='col'></div>
                    <input
                        type='file'
                        className='custom-file-input input-sm'
                        id='inputGroupFile01'
                        aria-describedby='inputGroupFileAddon01'
                        onChange={(ev) => handleFileInput(ev)}
                        style={{ display: 'none' }}
                    />
                    <button
                        // style={{ backgroundColor: 'var(--light) !important' }}
                        className='col-sm-2 btn btn-light btn-sm'
                        type='button'
                        id='inputGroupFileAddon04'
                        onClick={() => saveAsExcel('Temp', props.grid)}
                    >
                        Download Excel
                    </button>
                    <button
                        className='col-sm-2 btn btn-info btn-sm'
                        type='button'
                        onClick={() =>
                            document.getElementById('inputGroupFile01').click()
                        }
                    >
                        Upload Excel
                    </button>
                </div>

                <div style={{ margin: '3%' }} s></div>

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
