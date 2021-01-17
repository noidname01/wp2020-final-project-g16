import React from 'react'
import ReactDOM from 'react-dom'
// import Routes from './routes/Routes'
import App from './containers/App'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDataSheet from 'react-datasheet'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css'
import Routes from './routes/Routes'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App}></Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
)
