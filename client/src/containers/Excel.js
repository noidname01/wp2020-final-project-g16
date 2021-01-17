import React, { useState, useRef } from 'react'
import ReactDataSheet from 'react-datasheet'
import ExcelJs from 'exceljs'
import './Excel.css'

function EditableTable(props) {
	const [grid, setGrid] = useState([
		[
			{ readOnly: true, value: '' },
			{ value: 'A', readOnly: true },
			{ value: 'B', readOnly: true },
			{ value: 'C', readOnly: true },
			{ value: 'D', readOnly: true },
		],
		[
			{ readOnly: true, value: 1 },
			{ value: 1 },
			{ value: 3 },
			{ value: 3 },
			{ value: 3 },
		],
		[
			{ readOnly: true, value: 2 },
			{ value: 2 },
			{ value: 4 },
			{ value: 4 },
			{ value: 4 },
		],
		[
			{ readOnly: true, value: 3 },
			{ value: 1 },
			{ value: 3 },
			{ value: 3 },
			{ value: 3 },
		],
		[
			{ readOnly: true, value: 4 },
			{ value: 2 },
			{ value: 4 },
			{ value: 4 },
			{ value: 'gfdsjhk' },
		],
	])

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
			<input type='file' onChange={(ev) => handleFileInput(ev)}></input>
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
