import React, { useState, useRef, useEffect } from 'react'
import ReactDataSheet from 'react-datasheet'
import ExcelJs from 'exceljs'
import { saveAs } from 'file-saver'
import { useLocation } from 'react-router-dom'
import './Excel.css'

const MAX_RECEIVERS = 11

function createComponent(e) {
	return <span style={{ color: e.color }}>{e.varname}</span>
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
	console.log('colNumber: ' + colNumber)
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
	console.log(result)
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
	const [grid, setGrid] = useState([])
	const location = useLocation()

	useEffect(() => {
		const titles = location.state.varlist

		let sht = titles.map((e) => {
			return {
				value: e.varname,
				readOnly: true,
				forceComponent: true,
				component: createComponent(e),
			}
		})
		sht = [{ value: 'Email_Address', readOnly: true }, ...sht]
		setGrid(createSht([sht]))
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
				if (arraysEqual(sht[0], grid[0])) {
					setGrid(createSht(sht))
				} else {
					alert('Not Matched')
				}
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
