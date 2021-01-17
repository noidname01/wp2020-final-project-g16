import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from '../containers/App'
import Excel from '../containers/Excel'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Excel}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
