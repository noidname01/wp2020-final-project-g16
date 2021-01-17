import React, { useState } from 'react'
import Uploader from './Uploader'
import ExcelJs from 'exceljs'
import Sheet from './Sheet.js'

function ExcelViewer(props) {
	const [workbook, setWorkbook] = useState()
	const [_haveFile, setHaveFile] = useState(false)
	const [display, setDisplay] = useState([])

	const getFile = (f) => {
		const wb = new ExcelJs.Workbook()
		const reader = new FileReader()

		reader.readAsArrayBuffer(f)
		reader.onload = () => {
			const buffer = reader.result
			wb.xlsx.load(buffer).then((_workbook) => {
				setWorkbook(_workbook)
				setHaveFile(true)
				_workbook.eachSheet((sheet, id) => {
					let dp = sheet.columns.map((c) => c.values)
					console.log(dp)
					setDisplay(dp)
				})
			})
		}
	}

	return (
		<React.Fragment>
			<div>
				<Sheet sheet={display}></Sheet>
			</div>
			<Uploader getFile={(f) => getFile(f)}></Uploader>
		</React.Fragment>
	)
}

export default ExcelViewer
