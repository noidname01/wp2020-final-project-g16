import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from '../containers/App'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' render={App}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
