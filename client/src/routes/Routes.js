import React from 'react'
import { Route } from 'react-router-dom'

import New from '../containers/New'
import Template from '../containers/Template'
import Sent from '../containers/Sent'
import Settings from '../containers/Settings'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const routes = [
    { path: '/ee/new', Component: New },
    // { path: '/ee/draft', Component: Draft },
    { path: '/ee/template', Component: Template },
    { path: '/ee/sent', Component: Sent },
    { path: '/ee/settings', Component: Settings },
]

const Routes = (props) => {
    return (
        <>
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
