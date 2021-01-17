import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import New from '../containers/New'
import Draft from '../containers/Draft'
import Template from '../containers/Template'
import Sent from '../containers/Sent'
import Settings from '../containers/Settings'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/new' component={New}></Route>
                <Route path='/draft' component={Draft}></Route>
                <Route path='/template' component={Template}></Route>
                <Route path='/sent' component={Sent}></Route>
                <Route path='/settings' component={Settings}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
