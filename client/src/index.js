import React from 'react'
import ReactDOM from 'react-dom'
// import Routes from './routes/Routes'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDataSheet from 'react-datasheet'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css'

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('app')
)
