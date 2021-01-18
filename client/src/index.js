import React from 'react'
import ReactDOM from 'react-dom'
// import Routes from './routes/Routes'
import App from './containers/App'
import Login from './containers/Login'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDataSheet from 'react-datasheet'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Outapp></Outapp>
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
)
