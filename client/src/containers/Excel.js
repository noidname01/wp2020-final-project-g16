
import React, {useState} from 'react';
import ReactDataSheet from 'react-datasheet';
import './Excel.css';


function EditableTable(props){
	const [grid, setGrid] = useState([
        [
          { readOnly: true, value: "" },
          { value: "A", readOnly: true },
          { value: "B", readOnly: true },
          { value: "C", readOnly: true },
          { value: "D", readOnly: true }
        ],
        [
          { readOnly: true, value: 1 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 }
        ],
        [
          { readOnly: true, value: 2 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 4 }
        ],
        [
          { readOnly: true, value: 3 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 }
        ],
        [
          { readOnly: true, value: 4 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 4 }
        ]
      ]);
  	

  	return(
      <ReactDataSheet
        data={grid}
        valueRenderer={cell => cell.value}
        onCellsChanged={changes => {
          const temp = grid.map(row => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            temp[row][col] = { ...temp[row][col], value };
          });
          setGrid(temp);
        }}
      />
	);
}


export default EditableTable;