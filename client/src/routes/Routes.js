import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from '../containers/Welcome'
import Login from '../containers/Login'
import Register from '../containers/Register'
import New from '../containers/New'
import Draft from '../containers/Draft'
import Template from '../containers/Template'
import Sent from '../containers/Sent'
import Settings from '../containers/Settings'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const routes = [
    { path: '/ee/new', Component: New },
    { path: '/ee/draft', Component: Draft },
    { path: '/ee/template', Component: Template },
    { path: '/ee/sent', Component: Sent },
    { path: '/ee/settings', Component: Settings },
]

const Routes = (props) => {
    return (
        <>
            {/* <Route path='/ee/new' component={New}></Route>
            <Route path='/ee/draft' component={Draft}></Route>
            <Route path='/ee/template' component={Template}></Route>
            <Route path='/ee/sent' component={Sent}></Route>
            <Route path='/ee/settings' component={Settings}></Route> */}
            {routes.map(({ path, Component }) => {
                return (
                    <Route exact path={path} history={history}>
                        <Component userInfo={props.userinfo} />
                    </Route>
                )
            })}
        </>
    )
}

export default Routes
