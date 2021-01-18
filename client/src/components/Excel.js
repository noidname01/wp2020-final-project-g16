import React, { useState, useRef } from 'react'
import ReactDataSheet from 'react-datasheet'
import ExcelJs from 'exceljs'
import { saveAs } from 'file-saver'
import './Excel.css'

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
    const [grid, setGrid] = useState([])

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
                setGrid(sht)
            })
        }
    }

    const handleFileInput = (ev) => {
        getFile(ev.target.files[0])
    }
    return (
        <React.Fragment>
            <div class='flex-row'>
                <div className='custom-file excelfile flex'>
                    <input
                        type='file'
                        className=''
                        id='inputGroupFile01'
                        aria-describedby='inputGroupFileAddon01'
                        onChange={(ev) => handleFileInput(ev)}
                    />
                    <label className='custom-file-label' for='inputGroupFile01'>
                        未選擇任何檔案
                    </label>
                </div>
                <button
                    class='btn btn-light ml-5 flex'
                    type='button'
                    id='inputGroupFileAddon04'
                    onClick={() => saveAsExcel('Temp', grid)}
                >
                    Save
                </button>
            </div>
            <ReactDataSheet
                data={grid}
                valueRenderer={(cell) => cell.value}
                onCellsChanged={(changes) => {
                    const temp = grid.map((row) => [...row])
                    changes.forEach(({ cell, row, col, value }) => {
                        temp[row][col] = { ...temp[row][col], value }
                    })
                    setGrid(temp)
                }}
            />
        </React.Fragment>
    )
}

export default EditableTable
