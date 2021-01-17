import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';
import Excel from './containers/Excel'

ReactDOM.render(
    <div>
        <Excel />
    </div>,
    document.getElementById('app')
)
