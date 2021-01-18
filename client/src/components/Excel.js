import React, { useState, useRef, useEffect } from 'react'
import ReactDataSheet from 'react-datasheet'
import ExcelJs from 'exceljs'
import { saveAs } from 'file-saver'
import { useLocation } from 'react-router-dom'
import './Excel.css'

import { re } from '../config/parserConfig'

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
    const location = useLocation()

    console.log(location)

    const parser = (html) => {
        let matches_array = html.match(re)
        console.log(matches_array)
        let varList = matches_array.map((input) => {
            return {
                id: input.match(/id="([0-9]*)"/m)[1],
                varname: input.match(/name="([\w]*)"/m)[1],
                color: input.match(/background-color: (rgb\([0-9, ]*\))/m)[1],
            }
        })
        console.log(varList)
    }

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

    useEffect(() => {
        console.log(location.state.html)
        parser(location.state.html)
    }, [])
    return (
        <React.Fragment>
            <input type='file' onChange={(ev) => handleFileInput(ev)}></input>
            <button onClick={() => saveAsExcel('Temp', grid)}>Save As</button>
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
